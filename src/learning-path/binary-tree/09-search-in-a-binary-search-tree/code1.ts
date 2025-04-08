function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let p = root;
  while (p) {
    if (p.val === val) return p;
    if (p.val < val) {
      p = p.right;
      continue;
    }

    p = p.left;
  }

  return null;
}
