/**
 * leetcode题号94 二叉树的中序遍历
 * 布尔标记法过不了leetcode编译，正确性未知
 */

class TreeNodeWithSign extends TreeNode {
  right: TreeNodeWithSign;
  left: TreeNodeWithSign;
  sign: boolean;
}

function inorderTraversal(root: TreeNodeWithSign | null): number[] {
  if (root == null) return [];
  const res: number[] = [];
  const stack: TreeNodeWithSign[] = [];

  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.sign) {
      res.push(node.val);
      continue;
    }

    node.sign = true;
    if (node.right) stack.push(node.right);
    stack.push(node);
    if (node.left) stack.push(node.left);
  }

  return res;
}

export {};
