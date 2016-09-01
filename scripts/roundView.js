class RoundView {
  constructor() {
    this.gameTargets = [];
    this.el = document.createElement('div');
    this.el.setAttribute('id', 'board');
  }
  generateGameTargets() {
    let id = 1;
    window.setInterval(() => {
      const gameTargetView = new GameTargetView(id);
      gameTargetView.render();
      document.body.appendChild(gameTargetView.el)
      id += 1;
    }, 500);
  }
}
