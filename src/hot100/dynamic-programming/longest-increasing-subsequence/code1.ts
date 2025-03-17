function lengthOfLIS(nums: number[]): number {
  const dp: number[] = [1];
  nums.forEach((value, index) => {
    if (index === 0) return;

    let curIndex = index - 1;
    while (curIndex >= 0 && nums[curIndex] >= value) curIndex--;

    if (curIndex < 0) {
      dp[index] = 1;
      return;
    }

    dp[index] = dp[curIndex] + 1;
  });

  return Math.max(...dp);
}
