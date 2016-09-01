describe('GameTarget', () => {
  let target;

  beforeEach(() => {
    target = new Target();
  });

  describe('#new', () => {
    it('Stores a point value', () => {
      const points = target.pointValue;

      expect(points).toBeTruthy();
    });
  });

  describe('#generatePointValue', () => {
    it('Generates a random point value between 1 and 10', () => {
      const randomValue1 = target.generatePointValue();
      const randomValue2 = target.generatePointValue();
      const randomValue3 = target.generatePointValue();

      expect(randomValue1).toBeGreaterThan(0);
      expect(randomValue1).toBeLessThan(11);
      expect(randomValue2).toBeGreaterThan(0);
      expect(randomValue2).toBeLessThan(11);
      expect(randomValue3).toBeGreaterThan(0);
      expect(randomValue3).toBeLessThan(11);
    });
  });
});
