class RoundView {
  constructor(round, timerView, scoreView) {
    this.round = round || new Round();
    this.timerView = timerView || new TimerView();
    this.scoreView = scoreView || new ScoreView();
    this.targetId = 1;
    this.el = document.createElement('div');
    this.parentNode = document.querySelector('main');
    this.generationInterval = setInterval(() => { this.generateGameTargets(); }, 500);
  }
  generateGameTargets() {
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
      this.scoreView.render();
      setTimeout(() => {
        gameTargetNode.style.display = 'none';
      }, 500);
    });
  }
  clearGameTargets() {
    clearInterval(this.generationInterval);
    const targetNodes = document.querySelectorAll('.circle');
    targetNodes.forEach((target) => {
      document.querySelector('.board').removeChild(target);
    });
  }
  endRound() {
    this.el.setAttribute('class', `${this.el.getAttribute('class')} gray-overlay`);
    this.clearGameTargets();
  }
  // initialRender() {
  //   this.el.setAttribute('class', 'board');
  //   this.parentNode.appendChild(this.el);
  // }
  render() {
    this.el.setAttribute('class', 'board');
    const initialRender = setTimeout(() => {
      this.timerView.render();
      this.timerView.appendToBoard(this.el);
      this.scoreView.render();
      this.scoreView.appendToBoard(this.el);
      this.parentNode.appendChild(this.el);
      this.generateGameTargets();
    }, 1000);
  }
}
