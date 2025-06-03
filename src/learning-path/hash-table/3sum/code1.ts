/**
 * leetcode 题号：15.三数之和
 */

function threeSum(nums: number[]): number[][] {
  const countMap: Map<number, number> = new Map();
  nums = nums.filter((val) => {
    if (countMap.has(val)) {
      const count = countMap.get(val)!;
      countMap.set(val, count + 1);
    } else {
      countMap.set(val, 1);
    }

    return countMap.get(val)! <= 3;
  });
  const setArr = nums.map((_, index) => new Set(nums.slice(index)));
  const resSet: Set<string> = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const sum = -nums[i] - nums[j];
      if (setArr[j + 1].has(sum)) {
        const resArr = [sum, nums[i], nums[j]].sort((a, b) => a - b);
        resSet.add(JSON.stringify(resArr));
      }
    }
  }

  return Array.from(resSet).map((str) => JSON.parse(str));
}
