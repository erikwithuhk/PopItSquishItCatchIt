class TimerView {
  constructor(timer) {
    this.timer = timer || new Timer(30);
    this.el = document.createElement('div');
    this.class = 'timer';
  }
  appendToNode(boardNode) {
    boardNode.appendChild(this.el);
  }
  render() {
    const timeRemaining = this.timer.getCurrentTime();
    if (timeRemaining <= 5) {
      this.el.setAttribute('class', `${this.class} final-seconds-timer`);
    } else {
      this.el.setAttribute('class', `${this.class}`);
    }
    this.el.innerHTML = timeRemaining;
  }
}
