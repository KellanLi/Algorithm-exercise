function permute(nums: number[]): number[][] {
  const stack: number[] = [];
  const res: number[][] = [];

  const recurFn = () => {
    if (stack.length === nums.length) {
      res.push([...stack]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (stack.includes(nums[i])) continue;

      stack.push(nums[i]);
      recurFn();
      stack.pop();
    }
  };

  recurFn();

  return res;
}
