/**
 * 并发请求处理问题：并发地调用服务器请求
 */

const serveAdd = (a: number, b: number) => {
  return new Promise<number>((resolve) =>
    setTimeout(() => {
      resolve(a + b);
    }, 500),
  );
};

const add = async (...nums: number[]): Promise<number> => {
  if (nums.length === 1) return nums[0];

  const pending: (Promise<number> | number)[] = [];

  for (let i = 0; i < nums.length / 2; i++) {
    const mapI = nums.length - i - 1;
    if (mapI === i) {
      pending.push(nums[i]);
    } else {
      pending.push(serveAdd(nums[i], nums[mapI]));
    }
  }

  return add(...(await Promise.all(pending)));
};

const main = async () => {
  console.log(await add(1, 2, 3, 4, 5));
  console.log(await add(-1, 23, 56, 77));
};

main();

export {};
