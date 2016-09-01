class GameTarget {
  constructor() {
    this.pointValue = 0;
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
  getPointValue() {
    return this.pointValue;
  }
}
