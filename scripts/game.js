class Game {
  constructor(roundLength) {
    this.roundLength = roundLength || 30;
    this.timer = new Timer(this.roundLength);
    this.timerView = new TimerView(this.timer);
    this.round = new Round();
    this.roundView = new RoundView(this.round, this.timerView);
  }
  startRound() {
      this.roundView.render();
      this.checkStatus();
  }
  checkStatus() {
    if (!this.round.over()) {
      window.setInterval(() => {
        this.timer.countDown();
        this.timerView.render();
      }, 1000);
    } else {
      this.endRound();
    }
  }
  endRound() {
    this.roundView.clearGameTargets();
  }
}
