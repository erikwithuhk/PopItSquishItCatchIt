describe('GameTarget', () => {
  let gameTarget;

  beforeEach(() => {
    gameTarget = new GameTarget();
  });

  describe('#new', () => {
    it('Sets a point value property', () => {
      expect(gameTarget.pointValue).toBeTruthy();
    });
  });

  describe('#generatePointValue', () => {
    it('Generates a random point value between 1 and 10', () => {
      const randomValue1 = gameTarget.generatePointValue();
      const randomValue2 = gameTarget.generatePointValue();
      const randomValue3 = gameTarget.generatePointValue();

      expect(randomValue1).toBeGreaterThan(0);
      expect(randomValue1).toBeLessThan(11);
      expect(randomValue2).toBeGreaterThan(0);
      expect(randomValue2).toBeLessThan(11);
      expect(randomValue3).toBeGreaterThan(0);
      expect(randomValue3).toBeLessThan(11);
    });
  });
});
