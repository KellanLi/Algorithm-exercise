function findContentChildren(g: number[], s: number[]): number {
  const GLength = g.length;
  let sCount = s.length - 1;
  let res = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (let i = 0; i < GLength; i++) {
    if (g[GLength - 1 - i] <= s[sCount]) {
      res++;
      sCount--;
      if (sCount < 0) break;
    }
  }

  return res;
}
