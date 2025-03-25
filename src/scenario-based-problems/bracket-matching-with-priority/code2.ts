function isValidPriorityBrackets(s: string): boolean {
  const pair: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const weight: Record<string, number> = {
    "(": 0,
    "[": 1,
    "{": 2,
  };

  const stack: string[] = [];
  for (const char of s) {
    if (Object.keys(pair).includes(char)) {
      const c = stack.pop();
      if (c !== pair[char]) return false;
    } else {
      if (stack.length === 0) {
        stack.push(char);
        continue;
      }

      if (weight[char] <= weight[stack[stack.length - 1]]) {
        stack.push(char);
        continue;
      }

      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidPriorityBrackets("{[()]}")); // true
console.log(isValidPriorityBrackets("([{}])")); // false（外层()优先级低）
console.log(isValidPriorityBrackets("({)}")); // false（未正确闭合）
console.log(isValidPriorityBrackets("{[}]")); // false（正确闭合但优先级错误）

export {};
