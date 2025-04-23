function generateMatrix(n: number): number[][] {
  const matrix = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));
  let l = 0;
  let r = n - 1;
  let t = 0;
  let b = n - 1;
  let count = 1;
  while (count <= n * n) {
    for (let i = l; i <= r; i++) matrix[t][i] = count++;
    t++;
    for (let i = t; i <= b; i++) matrix[i][r] = count++;
    r--;
    for (let i = r; i >= l; i--) matrix[b][i] = count++;
    b--;
    for (let i = b; i >= t; i--) matrix[i][l] = count++;
    l++;
  }
  return matrix;
}
