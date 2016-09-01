describe('RoundView', () => {
  let roundView;


  beforeEach(() => {
    roundView = new RoundView();
  });


  describe('#new', () => {

    it('Stores all game targets in an array', () => {
      expect(roundView.gameTargets).toEqual(jasmine.any(Array));
    });

    it('Creates a div and stores is as el', () => {
      expect(roundView.el.tagName).toEqual('DIV');
    });

    it('Appends the board div to the document body', () => {
      const containerDiv = document.createElement('div');
      containerDiv.setAttribute('id', 'container');
      document.body.appendChild(containerDiv);

      expect(containerDiv.children[0].getAttribute('id')).toEqual('board');
    });

  });


  describe('#generateGameTargets', () => {

    beforeEach(() => {
      roundView.generateGameTargets();
    });

    it('Generates new GameTargetViews and pushes their GameTargets into the this.gameTargets array', () => {
      expect(roundView.gameTargets[0]).toEqual(jasmine.any(GameTarget));
    });

    it('Appends GameTargetView to board node', () => {
      expect(roundView.el.children[0]).toEqual(jasmine.any(GameTarget.el));
    });

  });


  describe('#render', () => {

    beforeEach(() => {
      roundView.render();
    });

    it('Sets the el ID to board', () => {
      expect(roundView.el.getAttribute('id')).toEqual('board');
    });

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
