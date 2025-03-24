function isValidPriorityBrackets(s: string): boolean {
  let sign = true;
  const pair: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const mapToNum: Record<string, number> = {
    "(": 0,
    "[": 1,
    "{": 2,
  };

  const stack: string[] = [];
  s.split("").forEach((char) => {
    if (Object.keys(pair).includes(char)) {
      if (stack[stack.length - 1] === pair[char]) {
        stack.pop();
        return;
      }
    }

    if (Object.keys(mapToNum).includes(char)) {
      if (Object.keys(mapToNum).includes(stack[stack.length - 1])) {
        if (mapToNum[stack[stack.length - 1]] < mapToNum[char]) {
          sign = false;
        }
      }
    }

    stack.push(char);
  });

  return stack.length === 0 && sign;
}

console.log(isValidPriorityBrackets("{[()]}")); // true
console.log(isValidPriorityBrackets("([{}])")); // false（外层()优先级低）
console.log(isValidPriorityBrackets("({)}")); // false（未正确闭合）
console.log(isValidPriorityBrackets("{[}]")); // false（正确闭合但优先级错误）
