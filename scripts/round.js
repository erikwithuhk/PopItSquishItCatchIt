class Round {
  constructor() {
    this.score = 0;
    this.gameTargets = [];
  }
  addGameTarget(gameTarget) {
    this.gameTargets.push(gameTarget);
  }
  getTotalScore() {
    let pointsFromAllGameTargets = this.gameTargets.map((gameTarget) => {
      return gameTarget.getPointValue();
    });
    const totalPoints = pointsFromAllGameTargets.reduce((curr, prev) => {
      return curr + prev;
    });
  }
}
