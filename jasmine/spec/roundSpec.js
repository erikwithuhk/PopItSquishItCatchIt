describe('Round', () => {
  let round;

  beforeEach(() => {
    round = new Round();
  });

  describe('#new', () => {

    it('Sets an initial score to 0', () => {
      expect(round.score).toEqual(0);
    });

  });


});
