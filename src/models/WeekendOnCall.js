class WeekendOnCall {
  constructor(workers) {
    this.workers = workers;
    this.index = 0;
  }

  increaseIndex() {
    this.index += 1;
  }

  switchWorkers(index) {
    const tmp = this.workers[index];
    this.workers[index] = this.workers[index + 1];
    this.workers[index + 1] = tmp;
  }
}

export default WeekendOnCall;
