function numTrees(n: number): number {
  if (n === 1) return 1;
  const dp: number[] = [1, 1];
  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      count += dp[j - 1] * dp[i - j];
    }
    dp[i] = count;
  }

  return dp[dp.length - 1];
}
