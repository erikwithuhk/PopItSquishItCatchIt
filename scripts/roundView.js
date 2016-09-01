class RoundView {
  constructor() {
    this.gameTargets = [];
    this.el = document.createElement('div');
    this.render();
  }
  generateGameTargets() {
    let id = 1;
    let gameTargetView;
    window.setInterval(() => {
      gameTargetView = new GameTargetView(id);
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
test.generateGameTargets();
