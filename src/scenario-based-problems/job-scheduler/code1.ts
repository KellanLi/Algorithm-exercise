type PromiseCreator<T = void> = () => Promise<T>;

class Scheduler {
  maxSize: number;
  pendingQue: PromiseCreator[] = [];
  runningSet: Set<PromiseCreator> = new Set();
  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  handleRun(promiseCreator: PromiseCreator) {
    promiseCreator().then(() => this.handleFinish(promiseCreator));
  }

  handleFinish(promiseCreator: PromiseCreator) {
    this.runningSet.delete(promiseCreator);
    if (this.pendingQue.length > 0) {
      const newTask = this.pendingQue.shift()!;
      this.handleRun(newTask);
    }
  }

  add(promiseCreator: PromiseCreator) {
    if (this.pendingQue.length < 2) {
      this.handleRun(promiseCreator);
      return;
    }

    this.runningSet.add(promiseCreator);
  }
}

const timer = (task: string, time: number) => () =>
  new Promise<void>((resolve) =>
    setTimeout(() => {
      console.log(task);
      resolve();
    }, time),
  );

const scheduler = new Scheduler(2);

scheduler.add(timer("task1", 1000));
scheduler.add(timer("task2", 500));
scheduler.add(timer("task3", 1000));
scheduler.add(timer("task4", 500));
