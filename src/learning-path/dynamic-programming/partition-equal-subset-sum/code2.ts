function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 === 1) return false;
  const dp = Array(Math.floor(sum / 2) + 1)
    .fill(null)
    .map(() => Array(nums.length + 1).fill(0));

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const val1 = dp[i][j - 1];
      const val2 = (dp[i - nums[j - 1]]?.[j - 1] ?? -nums[j - 1]) + nums[j - 1];

      dp[i][j] = Math.max(val1, val2);
    }
  }

  return dp[sum / 2][nums.length] === sum / 2;
}
