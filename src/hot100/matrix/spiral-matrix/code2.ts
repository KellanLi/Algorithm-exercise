function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];

  const point = {
    i: 0,
    j: -1,
  };

  const hadWalked: number[][] = Array(matrix.length)
    .fill(null)
    .map((_, index) => Array(matrix[index].length).fill(0));

  const toRight = (finish: () => void) => {
    if (hadWalked[point.i][point.j + 1] ?? 1) {
      finish();
      return;
    }

    do {
      point.j++;
      res.push(matrix[point.i][point.j]);
      hadWalked[point.i][point.j] = 1;
    } while (hadWalked[point.i][point.j + 1] === 0);
  };

  const toLeft = (finish: () => void) => {
    if (hadWalked[point.i][point.j - 1] ?? 1) {
      finish();
      return;
    }

    do {
      point.j--;
      res.push(matrix[point.i][point.j]);
      hadWalked[point.i][point.j] = 1;
    } while (hadWalked[point.i][point.j - 1] === 0);
  };

  const toDown = (finish: () => void) => {
    if (hadWalked[point.i + 1]?.[point.j] ?? 1) {
      finish();
      return;
    }

    do {
      point.i++;
      res.push(matrix[point.i][point.j]);
      hadWalked[point.i][point.j] = 1;
    } while (hadWalked[point.i + 1]?.[point.j] === 0);
  };

  const toUp = (finish: () => void) => {
    if (hadWalked[point.i - 1]?.[point.j] ?? 1) {
      finish();
      return;
    }

    do {
      point.i--;
      res.push(matrix[point.i][point.j]);
      hadWalked[point.i][point.j] = 1;
    } while (hadWalked[point.i - 1]?.[point.j] === 0);
  };

  let count = 0;
  while (count < 10) {
    count++;
    let sign = false;
    const finish = () => {
      sign = true;
    };

    toRight(finish);
    toDown(finish);
    toLeft(finish);
    toUp(finish);

    if (sign) {
      break;
    }
  }

  return res;
}
export {};
