/**
 * leetcode 题号144.二叉树的前序遍历
 * 迭代遍历
 */

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  const res: number[] = [];
  const stack: TreeNode[] = [];
  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return res;
}

export {}; // 转换为模块
