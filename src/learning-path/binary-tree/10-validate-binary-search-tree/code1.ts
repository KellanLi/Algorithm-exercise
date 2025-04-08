function isValidBST(root: TreeNode | null): boolean {
  const recurFn = (
    node: TreeNode | null,
  ): {
    max: number;
    min: number;
    isValid: boolean;
  } | null => {
    if (node === null) {
      return null;
    }

    const leftRes = recurFn(node.left);
    const rightRes = recurFn(node.right);

    return {
      max: rightRes?.max ?? node.val,
      min: leftRes?.min ?? node.val,
      isValid:
        (rightRes?.isValid ?? true) &&
        (leftRes?.isValid ?? true) &&
        (leftRes?.max ?? node.val - 1) < node.val &&
        (rightRes?.min ?? node.val + 1) > node.val,
    };
  };

  return recurFn(root)?.isValid ?? true;
}
