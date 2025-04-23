function search(nums: number[], target: number): number {
  const middle = Math.floor((0 + nums.length) / 2);
  let index = middle;
  let count = 0;
  while (count < nums.length && index >= 0 && index < nums.length) {
    count++;
    if (nums[index] === target) return index;
    if (nums[index] > target) {
      index--;
    }
    if (nums[index] < target) {
      index++;
    }
  }

  return -1;
}
