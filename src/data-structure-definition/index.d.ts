/**
 * 数据结构定义文件
 */

declare class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
declare class _Node {
  val: number;
  children: _Node[];

  constructor(v: number) {
    this.val = v;
    this.children = [];
  }
}
