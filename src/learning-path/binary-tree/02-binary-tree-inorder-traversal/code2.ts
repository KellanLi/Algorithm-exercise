/**
 * leetcode题号94 二叉树的中序遍历
 * 空指针标记法
 */

function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];
  const res: number[] = [];
  const stack: TreeNode[] = [];

  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    if (node === null) {
      const readyNode = stack.pop();
      res.push(readyNode.val);
      continue;
    }

    if (node.right) stack.push(node.right);
    stack.push(node);
    stack.push(null);
    if (node.left) stack.push(node.left);
  }

  return res;
}
