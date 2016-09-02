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
    this.setClickListener(gameTargetView);
    this.el.appendChild(gameTargetView.el);
    this.targetId += 1;
  }
  setClickListener(gameTargetView) {
    const gameTargetNode = gameTargetView.el;
    gameTargetNode.addEventListener('click', () => {
      gameTargetNode.style.transition = 'all 0.5s';
      gameTargetNode.style.opacity = 0;
      gameTargetNode.style.height = '20rem';
      gameTargetNode.style.width = '20rem';
      gameTargetView.gameTarget.setPointValue('bubbles', gameTargetView.diameter);
      setTimeout(() => {
        gameTargetNode.style.display = 'none';
      }, 500);
    });
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
