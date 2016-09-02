class RoundView {
  constructor(round, timerView, scoreView) {
    this.round = round || new Round();
    this.timerView = timerView || new TimerView();
    this.scoreView = scoreView || new ScoreView();
    this.targetId = 1;
    this.el = document.createElement('div');
    this.generationInterval = setInterval(() => { this.generateGameTarget(); }, 500);
  }
  generateGameTarget() {
    const gameTargetView = new GameTargetView(this.targetId);
    this.round.addGameTarget(gameTargetView.gameTarget);
    gameTargetView.render();
    this.el.appendChild(gameTargetView.el);
    this.targetId += 1;
  }
  clearGameTargets() {
    clearInterval(this.generationInterval);
    const targetNodes = document.querySelectorAll('.circle');
    targetNodes.forEach((target) => {
      document.querySelector('#board').removeChild(target);
    });
  }
  render() {
    this.el.setAttribute('id', 'board');
    this.timerView.render();
    this.timerView.appendToBoard(this.el);
    this.scoreView.render();
    this.scoreView.appendToBoard(this.el);
    document.querySelector('main').appendChild(this.el);
    this.generateGameTarget();
  }
}
