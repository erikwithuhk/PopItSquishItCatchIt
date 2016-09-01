describe('GameTargetView', () => {
  let targetView;


  beforeEach(() => {
    gameTargetView = new GameTargetView(1);
  });


  describe('#new', () => {

    it('Creates a new GameTarget and stores is as a property', () => {
      expect(gameTargetView.gameTarget).toEqual(jasmine.any(GameTarget));
    });

    it('Accepts an index number as an argument and stores it as a property', () => {
      expect(gameTargetView.id).toEqual(1);
    });

    it('Creates a div element and stores it as a property', () => {
      expect(gameTargetView.el).toEqual(document.createElement('div'));
    });

  });


  describe('#setInitialTopValue', () => {

    beforeEach(() => {
      gameTargetView.setInitialTopValue();
    });

    it('Sets the gameTarget node\'s top value between 0% and 100%', () => {
      const topValueWithPercent = gameTargetView.el.style.top;
      const removePercent = topValueWithPercent.slice(0, -1);
      const topValueInteger = parseInt(removePercent);

      expect(topValueInteger).toBeGreaterThan(-1);
      expect(topValueInteger).toBeLessThan(101);
    });

    it('Is a percent value', () => {
      const topValueWithPercent = gameTargetView.el.style.top;
      const percent = topValueWithPercent.slice(-1);
      expect(percent).toEqual('%');
    });

  });


  describe('#setInitialDiameter', () => {

    beforeEach(() => {
      gameTargetView.setInitialDiameter();
    });

    it('Sets the gameTarget node\'s height value between 1rem and 10rem', () => {
      const heightWithRem = gameTargetView.el.style.height;
      const removeRem = heightWithRem.slice(0, -3);
      const heightInteger = parseInt(removeRem);

      expect(heightInteger).toBeGreaterThan(0);
      expect(heightInteger).toBeLessThan(10);
    });

    it('Sets the gameTarget node\'s width value between 1rem and 10rem', () => {
      const widthWithRem = gameTargetView.el.style.width;
      const removeRem = widthWithRem.slice(0, -3);
      const widthInteger = parseInt(removeRem);

      expect(widthInteger).toBeGreaterThan(0);
      expect(widthInteger).toBeLessThan(10);

    });

  });


  describe('#render', () => {

    beforeEach(() => {
      gameTargetView.render();
    });

    it('Adds the class circle to the target node', () => {
      expect(gameTargetView.el.className).toEqual('circle');
    });

    it('Adds the id circle[ID] to the target node', () => {
      expect(gameTargetView.el.getAttribute('id')).toEqual('circle1');
    });

    it('Sets the target node\'s inital top value', () => {
      expect(gameTargetView.el.style.top).toBeTruthy();
    });

    it('Sets the target node\'s inital height value', () => {
      expect(gameTargetView.el.style.height).toBeTruthy();
    });

    it('Sets the target node\'s inital width value', () => {
      expect(gameTargetView.el.style.height).toBeTruthy();
    });

  });


});
