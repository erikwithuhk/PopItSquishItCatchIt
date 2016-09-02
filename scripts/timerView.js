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
    const timeRemaining = this.timer.getCurrentTime();
    let leadingZero;
    if (timeRemaining < 10) {
      leadingZero = `0${timeRemaining}`;
    } else {
      leadingZero = timeRemaining;
    }
    if (timeRemaining <= 5) {
      this.el.style.color = 'red';
    }
    this.el.innerHTML = `00:${leadingZero}`;
  }
}
