function combine(n: number, k: number): number[][] {
  const stack: number[] = [];
  const res: number[][] = [];

  const recurFn = (index: number) => {
    if (stack.length === k) {
      res.push([...stack]);
      return;
    }

    for (let i = index; i < n; i++) {
      stack.push(i + 1);
      recurFn(i + 1);
      stack.pop();
    }
  };

  recurFn(0);

  return res;
}
