/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  const head: TreeNode = {
    val: 0,
    right: root,
    left: null,
  };

  let p = head;

  const recurFn = (node: TreeNode | null) => {
    if (node === null) return;

    const { left, right } = node;

    p.right = node;
    p.left = null;
    p = p.right;

    recurFn(left);
    recurFn(right);
  };

  recurFn(root);
}
