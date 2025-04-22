function integerBreak(n: number): number {
  const dp: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    let res = 0;
    for (let j = 1; j < dp.length; j++) {
      res = Math.max(res, Math.max(dp[j], j) * (i - j));
    }
    dp.push(res);
  }

  return dp[dp.length - 1];
}
