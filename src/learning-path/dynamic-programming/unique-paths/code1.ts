function uniquePaths(m: number, n: number): number {
  const dp = Array(m)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
        continue;
      }
      dp[i][j] = (dp[i - 1]?.[j] ?? 0) + (dp[i][j - 1] ?? 0);
    }
  }

  return dp[m - 1][n - 1];
}
