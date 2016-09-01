class GameTargetView {
  constructor(id) {
    this.gameTarget = new GameTarget();
    this.id = id;
    this.el = document.createElement('div');
  }
  setInitialTopValue() {
    // Sets top value to a random number between 0 and 100
    const topValue = Math.random() * 100;
    this.el.style.top = `${topValue}%`;
  }
  setInitialDiameter() {
    // Sets height and width values to a random integer between 1 and 10
    const diameter = Math.floor(Math.random() * 9) + 1;
    this.gameTarget.setPointValue('bubbles', diameter);
    this.el.style.height = `${diameter}rem`;
    this.el.style.width = `${diameter}rem`;
  }
  render() {
    this.el.setAttribute('class', 'circle');
    this.el.setAttribute('id', `circle${this.id}`);
    this.setInitialDiameter();
    this.setInitialTopValue();
  }
}
