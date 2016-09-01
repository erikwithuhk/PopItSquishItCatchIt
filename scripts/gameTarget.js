class GameTarget {
  constructor() {
    this.pointValue = this.generatePointValue();
  }
  generatePointValue() {
    const randomValue = Math.floor(Math.random() * 9) + 1;
    return randomValue;
  }
  setPointValue(value) {
    this.pointValue = value;
  }
}
