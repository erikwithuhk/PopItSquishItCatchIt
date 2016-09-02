class TimerView {
  constructor(timer) {
    this.timer = timer || new Timer(30);
    this.el = document.createElement('div');
    this.class = 'timer';
  }
  appendToBoard(boardNode) {
    boardNode.appendChild(this.el);
  }
  render() {
    const timeRemaining = this.timer.getCurrentTime();
    if (timeRemaining === 'Time up!') {
      this.el.setAttribute('class', `${this.class} time-up-timer`);
    } else if (timeRemaining <= 5) {
      this.el.setAttribute('class', `${this.class} final-seconds-timer`);
    } else {
      this.el.setAttribute('class', `${this.class}`);
    }
    this.el.innerHTML = '&nbsp;';
    setTimeout(() => {
      this.el.innerHTML = timeRemaining;
    }, 200);
  }
}
