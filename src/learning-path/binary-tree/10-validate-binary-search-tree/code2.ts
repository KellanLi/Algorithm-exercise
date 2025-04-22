function isValidBST(root: TreeNode | null): boolean {
  if (root === null) return true;
  const arr: number[] = [];
  const recurFn = (node: TreeNode) => {
    if (node.left) recurFn(node.left);
    arr.push(node.val);
    if (node.right) recurFn(node.right);
  };

  recurFn(root);

  if (arr.length === 1) return true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= arr[i]) return false;
  }

  return true;
}
