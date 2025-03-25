function fib(n: number): number {
  const dp: number[] = [];
  for (let i = 0; i < n + 1; i++) {
    if (i <= 1) {
      dp[i] = i;
      continue;
    }

    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[dp.length - 1];
}
