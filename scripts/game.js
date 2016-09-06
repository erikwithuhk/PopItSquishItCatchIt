class Game {
  constructor(theme, roundLength) {
    this.theme = theme;
    this.roundLength = roundLength || 30;
    this.timer = null;
    this.timerView = null;
    this.round = null;
    this.scoreView = null;
    this.roundView = null;
    this.tick = null;
  }
  setStartClickListener(targetNode) {
    targetNode.addEventListener('click', () => {
      document.querySelector('main').innerHTML = '';
      this.startRound(this.theme);
    });
  }
  startGame() {
    const startScreen = document.createElement('div');
    startScreen.setAttribute('class', 'opening-screen');
    startScreen.innerHTML = `
      <h1>Welcome to [GAME NAME]!</h1>
      <button>Play</button>
      `;
    this.setStartClickListener(startScreen.querySelector('button'));
    document.querySelector('main').appendChild(startScreen);
  }
  startRound(theme) {
    this.round = new Round();
    this.theme = theme;
    this.timer = new Timer(this.roundLength);
    this.timerView = new TimerView(this.timer);
    this.scoreView = new ScoreView(this.round);
    this.roundView = new RoundView(this.theme, this.round, this.timerView, this.scoreView);
    this.roundView.startRound();
    setTimeout(() => {
      this.roundView.render();
      this.tick = setInterval(() => { this.checkStatus(); }, 1000);
    }, 2000);
  }
  endRound() {
    this.scoreView.removeScoreView();
    this.timerView.render();
    const playAgainButton = document.createElement('button');
    playAgainButton.innerHTML = 'Play again!';
    this.setStartClickListener(playAgainButton);
    this.roundView.endRound(playAgainButton);
    this.round.endRound();
    clearInterval(this.tick);
  }
  checkStatus() {
    if (!this.timer.over()) {
      this.timerView.render();
      this.timer.countDown();
    } else {
      this.endRound();
    }
  }
}
