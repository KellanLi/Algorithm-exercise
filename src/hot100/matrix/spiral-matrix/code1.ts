function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  const hasWalk = Array(matrix.length)
    .fill(null)
    .map((_, index) => Array(matrix[index].length).fill(0));

  let point = { i: 0, j: 0 };
  const toRight = () => {
    while (point.j < matrix[point.i].length) {
      hasWalk[point.i][point.j] = 1;
      res.push(matrix[point.i][point.j]);
      if (hasWalk[point.i][point.j + 1] === 1) break;
      point.j++;
    }
  };

  const toLeft = () => {
    while (point.j >= 0) {
      hasWalk[point.i][point.j] = 1;
      res.push(matrix[point.i][point.j]);
      if (hasWalk[point.i][point.j - 1] === 1) break;
      point.j--;
    }
  };

  const toUp = () => {
    while (point.i >= 0) {
      hasWalk[point.i][point.j] = 1;
      res.push(matrix[point.i][point.j]);
      if (hasWalk[point.i - 1]?.[point.j] === 1) break;
      point.i--;
    }
  };

  const toDown = () => {
    while (point.i < matrix.length) {
      hasWalk[point.i][point.j] = 1;
      res.push(matrix[point.i][point.j]);
      if (hasWalk[point.i + 1]?.[point.j] === 1) break;
      point.i++;
    }
  };

  const checkIfOver = () => {};

  while (1) {
    toRight();
    toDown();
    toLeft();
    toUp();
    break;
  }

  return res;
}

export {};
