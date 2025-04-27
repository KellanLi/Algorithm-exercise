var dataSource = [
  { foo: "bbb", num: 4, flag: 2 },
  { foo: "aaa", num: 3, flag: 1 },
  { foo: "ccc", num: -6, flag: 2 },
  { foo: "ccc", num: 8, flag: 2 },
  { foo: "bbb", num: 2, flag: 4 },
  { foo: "aaa", num: -3, flag: 4 },
];

var sorters: SorterType = [
  {
    key: "flag",
    asc: true,
  },
  {
    key: "foo",
    asc: false,
  },
  {
    key: "num",
    asc: true,
  },
];

[
  {
    foo: "aaa",
    num: 3,
    flag: 1,
  },
  {
    foo: "ccc",
    num: -6,
    flag: 2,
  },
  {
    foo: "ccc",
    num: 8,
    flag: 2,
  },
  {
    foo: "bbb",
    num: 4,
    flag: 2,
  },
  {
    foo: "bbb",
    num: 2,
    flag: 4,
  },
  {
    foo: "aaa",
    num: -3,
    flag: 4,
  },
];

type DataType = (typeof dataSource)[number];

type SorterType = { key: keyof DataType; asc: boolean }[];

const fn = (dataSource: DataType[], sorters: SorterType) => {
  const callback = (a: DataType, b: DataType): number => {
    for (let i = 0; i < sorters.length; i++) {
      const { key, asc } = sorters[i];
      if (a[key] === b[key]) {
        continue;
      }

      if (typeof a[key] === "string" && typeof b[key] === "string") {
        for (let i = 0; i < a[key].length; i++) {
          const res = a[key].charCodeAt(i) - b[key].charCodeAt(i);
          if (res !== 0) return asc ? res : -res;
        }
        continue;
      }

      const res = (a[key] as number) - (b[key] as number);

      return asc ? res : -res;
    }

    return 0;
  };

  return dataSource.sort(callback);
};

console.log(fn(dataSource, sorters));
