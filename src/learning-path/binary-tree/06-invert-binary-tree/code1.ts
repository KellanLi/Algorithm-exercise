function invertTree(root: TreeNode | null): TreeNode | null {
  const recurFn = (node: TreeNode | null): TreeNode | null => {
    if (node === null) return null;

    const left = recurFn(node.left);
    const right = recurFn(node.right);

    node.left = right;
    node.right = left;

    return node;
  };

  return recurFn(root);
}
