function findMaxForm(strs: string[], m: number, n: number): number {
  const count0 = strs.map((str) =>
    str.split("").reduce((res, char) => (char === "0" ? res + 1 : res), 0),
  );
  const count1 = strs.map((str) =>
    str.split("").reduce((res, char) => (char === "1" ? res + 1 : res), 0),
  );
  const dp = Array(strs.length)
    .fill(null)
    .map(() =>
      Array(m + 1)
        .fill(null)
        .map(() => Array(n + 1).fill(0)),
    );
}
