interface MyNode {
  name: string;
  require?: MyNode[];
}

const nodes: MyNode = {
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
  const res: string[] = [];
  const recurFn = (queue: MyNode[]) => {
    if (queue.length === 0) return;
    const newQueue: MyNode[] = [];

    queue.forEach((node) => {
      newQueue.push(...(node.require ?? []));
      res.push(node.name);
    });

    recurFn(newQueue);
  };

  recurFn([node]);

  const set = new Set();

  return res
    .filter((name) => {
      const ifHas = set.has(name);
      set.add(name);
      return !ifHas;
    })
    .reverse();
};

// eg
console.log(genRequireTree(nodes));
// return ["F.js","E.js","D.js","C.js","B.js","A.js","page.js"]
