class Round {
  constructor() {
    this.score = 0;
    this.gameTargets = [];
    this.timeRemaining = 30;
    this.startCountdownTimer();
  }
  addGameTarget(gameTarget) {
    this.gameTargets.push(gameTarget);
  }
  startCountdownTimer() {
    window.setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining -= 1;
      } else {
        this.timeRemaining = 0;
      }
      console.log(this.timeRemaining);
    }, 1000);
  }
  getTotalScore() {
    const pointsFromAllGameTargets = this.gameTargets.map((gameTarget) => {
      return gameTarget.getPointValue();
    });
    const totalPoints = pointsFromAllGameTargets.reduce((curr, prev) => {
      return curr + prev;
    });
    return totalPoints;
  }
}
