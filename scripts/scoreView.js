class ScoreView {
  constructor(round) {
    this.round = round;
    this.el = document.createElement('div');
    this.el.setAttribute('class', 'score');
  }
  render() {
    this.el.innerHTML = `Current score: ${this.round.getScore()}`;
  }
  appendToBoard(boardNode) {
    boardNode.appendChild(this.el);
  }
}
