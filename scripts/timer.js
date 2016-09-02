class Timer {
  constructor(initialTime) {
    this.timeRemaining = initialTime;
    this.timeUp = false;
  }
  over() {
    return this.timeUp;
  }
  countDown() {
    if (this.timeRemaining > 1) {
      this.timeRemaining -= 1;
    } else {
      this.timeRemaining = 0;
      this.timeUp = true;
    }
  }
  getCurrentTime() {
    if (this.timeRemaining > 0) {
      return this.timeRemaining;
    } else {
      return 'Time up!';
    }
  }
}
