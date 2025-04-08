function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (root === null) return null;

  if (p === null || q == null) {
    return p ?? q;
  }

  const findNode = (root: TreeNode, node: TreeNode): TreeNode[] => {
    const stack: TreeNode[] = [];
    const res: TreeNode[] = [];
    const recurFn = (nodeP: TreeNode) => {
      stack.push(nodeP);
      if (nodeP === node) {
        res.push(...stack);
        return;
      }
      if (nodeP.left) recurFn(nodeP.left);
      if (nodeP.right) recurFn(nodeP.right);
      stack.pop();
    };
    recurFn(root);
    return res;
  };

  const pStack = findNode(root, p);
  const qStack = findNode(root, q);

  for (let i = 0; i < pStack.length + 1; i++) {
    if (pStack[i] !== qStack[i]) return pStack[i - 1];
  }

  return null;
}
