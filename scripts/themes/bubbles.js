class BubblesTheme {
  constructor() {
    this.backgroundImageURL = 'images/underwater.jpg';
  }
  setBackgroundImage(node) {
    node.style.backgroundImage = `url('${this.backgroundImageURL}')`;
  }
}
