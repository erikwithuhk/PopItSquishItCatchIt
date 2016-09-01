describe('GameTarget', () => {
  let gameTarget;


  beforeEach(() => {
    gameTarget = new GameTarget();
  });


  describe('#new', () => {

    it('Sets a point value property to 0', () => {
      expect(gameTarget.pointValue).toEqual(0);
    });

  });


  describe('#setPointValue', () => {

    beforeEach(() => {
      gameTarget.setPointValue('bubbles', '4');
    });

    it('Sets the GameTarget\'s point value to the value passed in', () => {
      expect(gameTarget.pointValue).toEqual(7);
    });

  });


});
