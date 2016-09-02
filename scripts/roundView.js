class RoundView {
  constructor(timerView) {
    this.round = new Round();
    this.timerView = timerView || new TimerView();
    this.el = document.createElement('div');
  }
  generateGameTargets() {
    let id = 1;
    let gameTargetView;
    window.setInterval(() => {
      gameTargetView = new GameTargetView(id);
      this.round.addGameTarget(gameTargetView.gameTarget);
      gameTargetView.render();
      this.el.appendChild(gameTargetView.el);
      id += 1;
    }, 500);
  }
  clearGameTargets() {
    this.el.innerHTML = 'Game over';
  }
  render() {
    this.el.setAttribute('id', 'board');
    this.timerView.render();
    this.timerView.appendToBoard(this.el);
    document.querySelector('main').appendChild(this.el);
    this.generateGameTargets();
  }
}
//
// const test = new RoundView();
// test.render();
// test.generateGameTargets();
// test.round.tick();
