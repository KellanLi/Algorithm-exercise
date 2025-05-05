function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  const NumToChar: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const res: string[] = [];
  const stack: string[] = [];

  const recurFn = (index: number) => {
    if (stack.length === digits.length) {
      res.push(stack.join(""));
      return;
    }

    const num = digits[index];

    for (let i = 0; i < NumToChar[num].length; i++) {
      stack.push(NumToChar[num][i]);
      recurFn(index + 1);
      stack.pop();
    }
  };

  recurFn(0);

  return res;
}
