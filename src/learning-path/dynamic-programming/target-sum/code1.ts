function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((a, b) => a + b);
  const bagSize = (sum + target) / 2;
  if (bagSize % 1 !== 0 || bagSize < 0) return 0;
  const zeroCount = nums.reduce((res, val) => (val === 0 ? res + 1 : res), 0);
  const numsWithNo0 = nums.filter((val) => val !== 0);

  const dp: number[][] = Array(bagSize + 1)
    .fill(null)
    .map(() => Array(numsWithNo0.length + 1).fill(0));
  dp[0] = dp[0].map(() =>
    1 + zeroCount === 0
      ? zeroCount
      : Array(zeroCount)
          .fill(2)
          .reduce((a, b) => a * b, 1),
  );

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const val1 = dp[i][j - 1];
      const vla2 = dp[i - numsWithNo0[j - 1]]?.[j - 1] ?? 0;

      dp[i][j] = val1 + vla2;
    }
  }

  return dp[bagSize][numsWithNo0.length];
}
