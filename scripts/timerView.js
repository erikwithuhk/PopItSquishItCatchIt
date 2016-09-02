class TimerView {
  constructor(timer) {
    this.timer = timer || new Timer(30);
    this.el = document.createElement('div');
    this.el.setAttribute('class', 'timer');
  }
  appendToBoard(boardNode) {
    boardNode.appendChild(this.el);
  }
  render() {
    const timeRemaining = this.timer.getCurrentTime();
    let leadingZero;
    if (timeRemaining <= 5) {
      this.el.setAttribute('class', `${this.el.getAttribute('class')} final-seconds-timer`);
    }
    this.el.innerHTML = ''
    setTimeout(() => {
      this.el.innerHTML = timeRemaining;
    }, 200);
  }
}
