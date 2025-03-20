/**
 * 数据结构定义文件
 */

declare class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

declare class _Node {
  val: number;
  children: _Node[];

  constructor(v: number) {
    this.val = v;
    this.children = [];
  }
}
