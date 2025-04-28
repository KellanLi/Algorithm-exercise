const readline = require("readline");

// 创建接口以读取输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 用于存储输入的变量
let M, N;
let space = [];
let value = [];

// 读取第一行
rl.on("line", (input) => {
  if (!M && !N) {
    const params = input.split(" ").map(Number);
    M = params[0]; // 材料种类
    N = params[1]; // 行李空间
  } else if (space.length < M) {
    // 读取材料所占空间
    space = input.split(" ").map(Number);
  } else if (value.length < M) {
    // 读取材料价值
    value = input.split(" ").map(Number);
    rl.close(); // 关闭读取接口
  }
});

// 读取完所有输入后处理数据
rl.on("close", () => {
  console.log(fn(M, N, space, value));
});

const fn = (varieties, bagSize, space, value) => {
  const dp = Array(bagSize + 1)
    .fill(null)
    .map(() => Array(varieties + 1).fill(0));
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const val1 = dp[i][j - 1]; // 如果不携带该材料能获取的最大价值
      const val2 = (() => {
        if (dp[i - space[j - 1]] === undefined) {
          return 0;
        }

        return dp[i - space[j - 1]][j - 1] + value[j - 1];
      })();
      dp[i][j] = Math.max(val1, val2);
    }
  }
  // console.log(dp);
  return dp[bagSize][varieties];
};

// 测试数据
// 6 7
// 2 2 3 1 5 2
// 2 3 1 5 4 3

[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5],
  [0, 2, 3, 3, 10, 10, 10],
  [0, 2, 3, 3, 15, 15, 15],
  [0, 4, 6, 6, 20, 20, 20],
  [0, 4, 6, 6, 25, 25, 25],
  [0, 6, 9, 9, 30, 30, 30],
  [0, 6, 9, 9, 35, 35, 35],
];

// 测试数据
// 6 7
// 2 2 3 1 5 2 space
// 2 3 1 5 4 3 value

[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5],
  [0, 2, 3, 3, 5, 5, 5],
  [0, 2, 3, 3, 8, 8, 8],
  [0, 2, 5, 5, 8, 8, 8],
  [0, 2, 5, 5, 10, 10, 11],
  [0, 2, 5, 5, 10, 10, 11],
  [0, 2, 5, 6, 10, 10, 13],
];
