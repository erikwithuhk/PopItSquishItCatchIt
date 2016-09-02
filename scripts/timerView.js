class TimerView {
  constructor(timer) {
    this.timer = timer || new Timer(30);
    this.el = document.createElement('div');
    this.el.setAttribute('id', 'timer');
  }
  appendToBoard(boardNode) {
    boardNode.appendChild(this.el);
  }
  render() {
    this.el.innerHTML = this.timer.getCurrentTime();
  }
}
