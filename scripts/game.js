class Game {
  constructor() {

  }
  countdownTimer() {
    window.setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining -= 1;
      } else {
        this.timeRemaining = 0;
        this.endRound();
      }
    }, 1000);
  }
}
