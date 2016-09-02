class Game {
  constructor() {
    this.timer = new Timer(30);
    this.timerView = new TimerView(this.timer);
    this.roundView = new RoundView(this.timerView);
  }
  startRound() {
    // while (this.timer.roundOver() !== true) {
      this.roundView.render();
      window.setInterval(() => {
          this.timer.countDown();
          this.timerView.render();
      }, 1000);
    // }
  }
  roundOver() {
    this.roundView.clearGameTargets();
  }
}

const test = new Game();
test.startRound();
