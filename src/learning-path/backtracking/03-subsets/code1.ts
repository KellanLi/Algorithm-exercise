function subsets(nums: number[]): number[][] {
  const stack: number[] = [];
  const res: number[][] = [];

  const recurFn = (depth: number) => {
    if (depth === nums.length) {
      res.push([...stack]);
      return;
    }

    // for(let i = 0; i < nums.length; i++) {

    // }
    stack.push(nums[depth]);
    recurFn(depth + 1);
    stack.pop();

    recurFn(depth + 1);
  };

  recurFn(0);

  return res;
}
