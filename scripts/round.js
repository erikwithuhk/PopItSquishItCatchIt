class Round {
  constructor() {
    this.score = 0;
    this.gameTargets = [];
    this.timeLimit = 30;
    this.roundOver = false;
  }
  addGameTarget(gameTarget) {
    this.gameTargets.push(gameTarget);
  }
  getScore() {
    if (this.gameTargets.length === 0) {
      return this.score;
    } else {
      const pointsFromAllGameTargets = this.gameTargets.map((gameTarget) => {
        return gameTarget.getPointValue();
      });
      const totalPoints = pointsFromAllGameTargets.reduce((curr, prev) => {
        return curr + prev;
      });
      this.score = totalPoints;
      return this.score;
    }
  }
  endRound() {
    this.roundOver = true;
    this.getScore();
  }
}
