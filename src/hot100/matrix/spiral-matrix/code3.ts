function spiralOrder(matrix: number[][]): number[] {
  const n = matrix[0].length;
  const m = matrix.length;
  const res: number[] = [];

  let r = n - 1;
  let d = m - 1;
  let l = 0;
  let u = 0;
  while (res.length < m * n) {
    for (let i = l; i <= r; i++) res.push(matrix[u][i]);
    u++;
    if (u > d) break;
    for (let i = u; i <= d; i++) res.push(matrix[i][r]);
    r--;
    if (r < l) break;
    for (let i = r; i >= l; i--) res.push(matrix[d][i]);
    d--;
    if (d < u) break;
    for (let i = d; i >= u; i--) res.push(matrix[i][l]);
    l++;
    if (l > r) break;
  }
  return res;
}
