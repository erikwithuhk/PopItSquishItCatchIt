class Game {
  constructor(roundLength) {
    this.roundLength = roundLength || 30;
    this.timer = null;
    this.timerView = null;
    this.round = null;
    this.roundView = null;
    this.tick = null;
  }
  startRound() {
    this.timer = new Timer(this.roundLength);
    this.timerView = new TimerView(this.timer);
    this.round = new Round()
    this.roundView = new RoundView(this.round, this.timerView);
    this.roundView.render();
    this.tick = setInterval(() => { this.checkStatus(); }, 1000);
  }
  endRound() {
    this.roundView.clearGameTargets();
    clearInterval(this.tick);
    this.round.endRound();
  }
  checkStatus() {
    if (!this.timer.over()) {
      this.timer.countDown();
      this.timerView.render();
    } else {
      this.endRound();
    }
  }
}
