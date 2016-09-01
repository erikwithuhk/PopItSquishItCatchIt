describe('GameTargetView', () => {
  let targetView;

  beforeEach(() => {
    gameTargetView = new GameTargetView(1);
  });

  describe('#new', () => {
    it('Accepts an index number as an argument and stores it as a property', () => {
      expect(gameTargetView.index).toEqual(1);
    });
    it('Creates a div element and stores it as a property', () => {
      expect(gameTargetView.el).toEqual(document.createElement('div'));
    });
  });
  describe('#render', () => {
    it('Adds the class circle to the target node', () => {
      expect(gameTargetView.el.className).toEqual('circle');
    });
  });
});
