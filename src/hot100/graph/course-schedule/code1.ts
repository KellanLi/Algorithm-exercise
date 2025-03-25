/**
 * 题号207 课程表
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const solveMap: Record<number, { inCount: number; solves: number[] }> = {};
  const res: number[] = [];
  prerequisites.forEach((pair) => {
    const [front, rear] = pair;
    if (solveMap[front] === undefined) {
      solveMap[front] = { inCount: 0, solves: [rear] };
    } else {
      solveMap[front].solves.push(rear);
    }

    if (solveMap[rear] === undefined) {
      solveMap[rear] = { inCount: 1, solves: [] };
    } else {
      solveMap[rear].inCount++;
    }
  });

  Object.keys(solveMap).forEach((key: any) => {
    const ele = solveMap[key];
    if (ele.inCount === 0) {
      res.push(key);
    }
  });

  let count = 0;
  while (res[count] !== undefined) {
    solveMap[res[count]].solves.forEach((item) => {
      solveMap[item].inCount--;
      if (solveMap[item].inCount === 0) {
        res.push(item);
      }
    });
    count++;
  }

  return (
    Object.keys(solveMap).findIndex(
      (item: any) => solveMap[item].inCount !== 0,
    ) === -1
  );
}

export {};
