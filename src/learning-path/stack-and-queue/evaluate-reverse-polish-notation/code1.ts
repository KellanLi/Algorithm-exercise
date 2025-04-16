function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operators = ["+", "-", "*", "/"];
  const evaluators: Record<string, (a: number, b: number) => number> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a - (a % b)) / b,
  };
  tokens.forEach((token) => {
    if (operators.includes(token)) {
      const val1 = stack.pop()!;
      const val2 = stack.pop()!;
      const evaluator = evaluators[token];
      stack.push(evaluator(val2, val1));
    } else {
      stack.push(Number(token));
    }
  });

  return stack[0];
}
