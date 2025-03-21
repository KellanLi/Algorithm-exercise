function levelOrder(root: _Node | null): number[][] {
  if (root === null) return [];
  const res: number[][] = [];

  const recurFn = (queue: _Node[]): void => {
    if (queue.length === 0) return;

    const newQueue: _Node[] = [];
    const newRes: number[] = [];
    queue.forEach((node) => {
      newRes.push(node.val);
      newQueue.push(...node.children);
    });

    res.push(newRes);
    recurFn(newQueue);
  };

  recurFn([root]);

  return res;
}

export {};
