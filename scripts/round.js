class Round {
  constructor() {
    this.score = 0;
    this.gameTargets = [];
    this.timeRemaining = 10;
    this.countdownTimer();
    this.gameOver = false;
  }
  addGameTarget(gameTarget) {
    this.gameTargets.push(gameTarget);
  }
  countdownTimer() {
    window.setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining -= 1;
      } else {
        this.timeRemaining = 0;
        this.endRound();
      }
      console.log(this.timeRemaining);
    }, 1000);
  }
  getRoundScore() {
    const pointsFromAllGameTargets = this.gameTargets.map((gameTarget) => {
      return gameTarget.getPointValue();
    });
    const totalPoints = pointsFromAllGameTargets.reduce((curr, prev) => {
      return curr + prev;
    });
    return totalPoints;
  }
  isGameOver() {
    return this.gameOver;
  }
  endRound() {
    this.score = this.getRoundScore();
  }
}
