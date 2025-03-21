function levelOrder(root: _Node | null): number[][] {
  const res: number[][] = [];
  if (root === null) return [];
  let que = [root];
  let que1: _Node[] = [];
  let count = 0;
  while (que.length !== 0) {
    const resArr: number[] = [];
    que.forEach((node) => {
      resArr.push(node.val);
      if (node.children) que1.push(...node.children);
    });
    que = que1;
    que1 = [];
    res[count] = resArr;
    count++;
  }

  return res;
}

export {};
