/**
 * leetcode 题号：376.摆动序列
 */
function wiggleMaxLength(nums: number[]): number {
  if (nums.length === 1) return 1;
  let lastDif: number | undefined;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    const curDif = nums[i] - nums[i - 1];

    if (lastDif === undefined || lastDif * curDif < 0) {
      if (curDif === 0) continue;
      lastDif = curDif;
      count++;
      continue;
    }
  }
  return count;
}
