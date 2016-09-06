class ScoreView {
  constructor(round) {
    this.round = round;
    this.el = document.createElement('div');
    this.el.setAttribute('class', 'current-score');
  }
  render() {
    this.el.innerHTML = `Current score: ${this.round.getScore()}`;
  }
  appendToNode(boardNode) {
    boardNode.appendChild(this.el);
  }
  removeScoreView() {
    this.el.innerHTML = ' ';
  }
  displayFinal() {
    this.el.setAttribute('class', 'final-score');
    this.el.innerHTML = `Final score: ${this.round.getScore()}`;
    return this.el;
  }
}
