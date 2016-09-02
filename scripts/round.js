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
    const pointsFromAllGameTargets = this.gameTargets.map((gameTarget) => {
      return gameTarget.getPointValue();
    });
    const totalPoints = pointsFromAllGameTargets.reduce((curr, prev) => {
      return curr + prev;
    });
    return totalPoints;
  }
  endRound() {
    this.roundOver = true;
  }
}
