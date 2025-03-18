/**
 * leetcode 题号144.二叉树的前序遍历
 */

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  const res: number[] = [];
  const recurFn = (node: TreeNode | null): void => {
    if (node === null) return;

    res.push(node.val);

    recurFn(node.left);
    recurFn(node.right);
  };

  recurFn(root);
  return res;
}

export {}; // 转换为模块
