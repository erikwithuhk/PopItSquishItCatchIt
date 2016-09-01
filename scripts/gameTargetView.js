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
    // Adds circle class to this.el
    // Adds consecutive id to this.el
    // Sets inital height and width
    // Sets initial random top value
    this.setInitialTopValue();
  }
}
