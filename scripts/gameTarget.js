class GameTarget {
  constructor() {
    this.pointValue = this.generatePointValue();
  }
  generatePointValue() {
    const randomValue = Math.floor(Math.random() * 9) + 1;
    return randomValue;
  }
  setPointValue(targetType, targetValue) {
    const pointValues = {
      bubbles: {
        1: 10,
        2: 9,
        3: 8,
        4: 7,
        5: 6,
        6: 5,
        7: 4,
        8: 3,
        9: 2,
        10: 1,
      },
    };
    this.pointValue = pointValues[targetType][targetValue];
  }
}
