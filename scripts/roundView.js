class RoundView {
  constructor() {
    this.round = new Round();
    this.el = document.createElement('div');
    this.render();
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
  render() {
    this.el.setAttribute('id', 'board');
    document.body.querySelector('#container').appendChild(this.el);
  }
}

const test = new RoundView();
// test.generateGameTargets();
let gameTargetView = new GameTargetView(1);
test.round.addGameTarget(gameTargetView.gameTarget);
gameTargetView.render();
test.el.appendChild(gameTargetView.el);

let gameTargetView2 = new GameTargetView(2);
test.round.addGameTarget(gameTargetView2.gameTarget);
gameTargetView2.render();
test.el.appendChild(gameTargetView2.el);
