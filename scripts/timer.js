class Timer {
  constructor(initialTime) {
    this.timeRemaining = initialTime;
    this.timeUp = false;
  }
  roundOver() {
    return this.timeUp;
  }
  countDown() {
    if (this.timeRemaining > 0) {
      this.timeRemaining -= 1;
    } else {
      this.timeRemaining = 0;
      this.timeUp = true;
    }
  }
  getCurrentTime() {
    return this.timeRemaining;
  }
}
