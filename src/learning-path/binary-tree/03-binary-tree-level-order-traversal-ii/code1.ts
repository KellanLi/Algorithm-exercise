/**
 * leetcode题号107 二叉树的层序遍历II
 */

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const res: number[][] = [];

  const recurFn = (queue: TreeNode[]): void => {
    if (queue.length === 0) return;
    const curRes: number[] = [];
    const newQueue: TreeNode[] = [];

    queue.forEach((node) => {
      curRes.push(node.val);
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    });

    res.unshift(curRes);
    recurFn(newQueue);
  };

  recurFn([root]);

  return res;
}
