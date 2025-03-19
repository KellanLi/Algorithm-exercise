interface MyNode {
  name: string;
  require?: MyNode[];
}

const nodes = {
  name: "page.js",
  require: [
    {
      name: "A.js",
      require: [{ name: "C.js", require: [{ name: "F.js" }] }],
    },
    {
      name: "B.js",
      require: [
        {
          name: "D.js",
          require: [{ name: "F.js" }],
        },
        {
          name: "E.js",
          require: [],
        },
      ],
    },
  ],
};

const genRequireTree = (node: MyNode) => {
  // your code
  const hashMap: Map<string, { inCount: number; solve: Set<string> }> =
    new Map();

  const res: string[] = [];

  const recurFn = (node: MyNode, parentName = ""): void => {
    if (hashMap.has(node.name)) {
      hashMap.get(node.name)!.solve.add(parentName);
    } else {
      hashMap.set(node.name, {
        inCount: node.require?.length ?? 0,
        solve: new Set([parentName]),
      });
    }

    node.require?.forEach((item) => {
      recurFn(item, node.name);
    });
  };

  recurFn(node);

  for (const [key, value] of hashMap) {
    if (value.inCount === 0) res.push(key);
  }

  let count = 0;
  while (res.length < hashMap.size) {
    const curNode = res[count];
    count++;
    if (curNode === undefined) break;

    const { solve } = hashMap.get(curNode)!;
    solve.forEach((item) => {
      hashMap.get(item)!.inCount--;
      if (hashMap.get(item)!.inCount === 0) res.push(item);
    });
  }

  return res;
};

// eg
console.log(genRequireTree(nodes));
// return ["F.js","E.js","D.js","C.js","B.js","A.js","page.js"]

export {};
