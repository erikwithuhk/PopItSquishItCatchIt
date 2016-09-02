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
    } else if (this.timeRemaining === 1) {
      this.timeUp = true;
      this.timeRemaining -= 1;
    } else {
      this.timeRemaining = 0;
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
