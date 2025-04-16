class MyQueue {
  stack1: number[] = [];
  stack2: number[] = [];
  constructor() {}

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    while (this.stack1[0] !== undefined) {
      this.stack2.push(this.stack1.pop()!);
    }
    const val = this.stack2.pop()!;
    while (this.stack2[0] !== undefined) {
      this.stack1.push(this.stack2.pop()!);
    }
    return val;
  }

  peek(): number {
    return this.stack1[0];
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
