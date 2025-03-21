/**
 * leetcode题号94 二叉树的中序遍历
 * 布尔标记法需新定义类才能通过leetcode编译
 */

class TreeNodeWithSign extends TreeNode {
  right: TreeNodeWithSign | null = null;
  left: TreeNodeWithSign | null = null;
  sign: boolean;
  constructor(
    val?: number,
    left?: TreeNodeWithSign | null,
    right?: TreeNodeWithSign | null,
  ) {
    super(val);
    this.right = right ?? null;
    this.left = left ?? null;
    this.sign = false;
  }
}

function inorderTraversal(root: TreeNodeWithSign | null): number[] {
  if (root == null) return [];
  const res: number[] = [];
  const stack: TreeNodeWithSign[] = [];

  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop()!;
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
