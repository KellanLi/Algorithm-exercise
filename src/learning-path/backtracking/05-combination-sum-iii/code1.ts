/**
 * 216. 组合总和 III
 *
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
 * - 只使用数字1到9
 * - 每个数字 最多使用一次
 * 返回所有可能的有效组合的列表。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
 *
 */

function combinationSum3(k: number, n: number): number[][] {
  const stack: number[] = [];
  const res: number[][] = [];

  const recurFn = (startIndex: number) => {
    if (stack.length === k) {
      const sum = stack.reduce((sum, item) => sum + item, 0);
      if (sum === n) res.push([...stack]);
      return;
    }

    for (let i = startIndex; i < 9; i++) {
      stack.push(i + 1);
      recurFn(i + 1);
      stack.pop();
    }
  };

  recurFn(0);

  return res;
}
