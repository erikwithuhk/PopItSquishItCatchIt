describe('RoundView', () => {
  let roundView;


  beforeEach(() => {
    roundView = new RoundView();
  });


  describe('#new', () => {

    it('Stores all game targets in an array', () => {
      expect(roundView.gameTargets).toEqual(jasmine.any(Array));
    });

    it('Creates a div with the id board', () => {
      expect(roundView.el.tagName).toEqual('DIV');
      expect(roundView.el.getAttribute('id').toEqual('board');
    });

  });


  describe('#generateGameTargets', () => {

    beforeEach(() => {
      roundView.generateGameTargets();
    });

    it('Generates new GameTargetViews and pushes them into the this.gameTargets array', () => {
      expect(roundView.gameTargets[0]).toEqual(jasmine.any(GameTargetView));
    });

    it('Appends ');

  });


});


// describe('#generateGameTargets', () => {
//
//   it('', () => {
      // expect().toBe();
//
//   });
//
// });
