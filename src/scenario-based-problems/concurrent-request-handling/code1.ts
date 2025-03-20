/**
 * 并发请求处理问题：并发地调用服务器请求
 */

const serveAdd = (a: number, b: number) => {
  return new Promise<number>((resolve) => setTimeout(() => {
    resolve(a + b);
  }, 500));
}

const add = async (...nums: number[]): Promise<number> => {
  let res = [...nums];
  let res2: (number | Promise<number>)[] = [];
  while(res.length > 1) {
    for(let i = 0; i < res.length/2; i++) {
      const mapI = res.length - 1 - i;
      if(mapI === i) {
        res2.push(res[i]);
        break;
      }

      res2.push(serveAdd(res[i], res[mapI]));
    }

    res = await Promise.all(res2);
    res2 = []
  }

  return res[0];
}

const main = async () => {
  console.log(await add(1,2,3,4,5));
  console.log(await add(-1, 23, 56, 77));
}

main();

export {}