function binaryTreePaths(root: TreeNode | null): string[] {
  if (root === null) return [];
  const res: string[] = [];
  const stack: number[] = [];
  const recurFn = (node: TreeNode) => {
    stack.push(node.val);

    if (node.left === null && node.right === null) {
      res.push(stack.join("->"));
    }

    if (node.left) recurFn(node.left);
    if (node.right) recurFn(node.right);
    stack.pop();
  };

  recurFn(root);

  return res;
}
