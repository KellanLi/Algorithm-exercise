function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const recurFn = (startIndex: number) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i < n; i++) {
      path.push(i + 1);
      recurFn(startIndex + i + 1);
      path.pop();
    }
  };

  recurFn(0);

  return res;
}
