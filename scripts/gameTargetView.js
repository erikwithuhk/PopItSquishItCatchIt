class GameTargetView {
  constructor(id) {
    this.gameTarget = new GameTarget();
    this.id = id;
    this.el = document.createElement('div');
  }
  setInitialTopValue() {
    const topValue = Math.floor(Math.random() * 100);
    this.el.style.top = `${topValue}%`;
  }
  render() {
    this.el.setAttribute('class', 'circle');
    this.el.setAttribute('id', `circle${this.id}`);
    // Sets inital height and width
    this.setInitialTopValue();
  }
}
