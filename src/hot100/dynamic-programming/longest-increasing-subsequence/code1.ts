function lengthOfLIS(nums: number[]): number {
  const dp: number[] = [1];
  nums.forEach((value, index) => {
    if (index === 0) return;

    let curIndex = index - 1;
    let maxLength = 1;
    while (curIndex >= 0) {
      if (nums[curIndex] < value) {
        maxLength = Math.max(dp[curIndex] + 1, maxLength);
      }
      curIndex--;
    }

    dp[index] = maxLength;
  });

  return Math.max(...dp);
}
