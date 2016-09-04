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
    }
    const pointsFromAllGameTargets = this.gameTargets.map((gameTarget) =>
      gameTarget.getPointValue()
    );
    const totalPoints = pointsFromAllGameTargets.reduce((curr, prev) =>
      curr + prev
    );
    this.score = totalPoints;
    return this.score;
  }
  endRound() {
    this.roundOver = true;
  }
}
