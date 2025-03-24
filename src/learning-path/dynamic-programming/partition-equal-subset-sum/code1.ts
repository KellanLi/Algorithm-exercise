function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((res, item) => res + item, 0);
  if (sum % 2 === 1) return false;

  const bagSize = sum / 2;
  const dp: number[][] = Array(bagSize + 1)
    .fill(0)
    .map(() => Array(nums.length + 1).fill(0));

  for (let i = 1; i < bagSize + 1; i++) {
    const curBagSize = i;
    for (let j = 1; j < nums.length + 1; j++) {
      const num = nums[j - 1];
      if (dp[curBagSize - num]?.[j] === undefined) {
        dp[curBagSize][j] = dp[curBagSize][j - 1];
      } else {
        dp[curBagSize][j] = dp[curBagSize - num][j] + num;
      }
    }
  }

  return dp[bagSize][nums.length] === bagSize;
}

export {};
