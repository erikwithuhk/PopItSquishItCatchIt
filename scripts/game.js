class Game {
  constructor(roundLength) {
    this.roundLength = roundLength || 30;
    this.timer = new Timer(this.roundLength);
    this.timerView = new TimerView(this.timer);
    this.round = new Round();
    this.roundView = new RoundView(this.round, this.timerView);
    this.tick = setInterval(() => { this.checkStatus(); }, 1000);
  }
  startRound() {
      this.roundView.render();
      this.checkStatus();
  }
  checkStatus() {
    if (!this.timer.over()) {
      this.timerView.render();
      this.timer.countDown();
    } else {
      this.endRound();
    }
  }
  endRound() {
    clearInterval(this.tick);
    this.roundView.clearGameTargets();
  }
}
