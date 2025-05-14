function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);
  let lastVal: number | undefined;
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] === lastVal) continue;
    let left = i + 1;
    let right = sortedNums.length - 1;
    let lastLeftVal: number | undefined, lastRightVal: number | undefined;
    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        if (
          lastLeftVal !== sortedNums[left] &&
          lastRightVal !== sortedNums[right]
        )
          res.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        lastLeftVal = sortedNums[left];
        lastRightVal = sortedNums[right];
        left++;
      }
      if (sum < 0) left++;
      if (sum > 0) right--;
    }
    lastVal = sortedNums[i];
  }
  return res;
}
