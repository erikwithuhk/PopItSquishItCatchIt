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

    it('Initializes a diameter property set to null', () => {
      expect(gameTargetView.diameter).toBeNull();
    });

    it('Initializes a top property set to null', () => {
      expect(gameTargetView.top).toBeNull();
    });

  });


  describe('#setTopValue', () => {

    beforeEach(() => {
      gameTargetView.setTopValue();
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


  describe('#setDiameter', () => {

    beforeEach(() => {
      gameTargetView.setDiameter();
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


  describe('#setOpacity', () => {

    it('Sets the opacity of the GameTargetView to 1 if the diameter is 1', () => {
      gameTargetView.diameter = 1;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('1');

      gameTargetView.diameter = 2;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).not.toEqual('1');
    });

    it('Sets the opacity of the GameTargetView to 0.75 if the diameter is between 2 and 4', () => {
      gameTargetView.diameter = 1;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).not.toEqual('0.75');

      gameTargetView.diameter = 2;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.75');

      gameTargetView.diameter = 3;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.75');

      gameTargetView.diameter = 4;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.75');

      gameTargetView.diameter = 5;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).not.toEqual('0.75');
    });

    it('Sets the opacity of the GameTargetView to 0.5 if the diameter is between 5 and 7', () => {
      gameTargetView.diameter = 4;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).not.toEqual('0.5');

      gameTargetView.diameter = 5;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.5');

      gameTargetView.diameter = 6;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.5');

      gameTargetView.diameter = 7;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.5');

      gameTargetView.diameter = 8;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).not.toEqual('0.5');
    });

    it('Sets the opacity of the GameTargetView to 0.25 if the diameter is between 8 and 10', () => {
      gameTargetView.diameter = 7;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).not.toEqual('0.25');

      gameTargetView.diameter = 8;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.25');

      gameTargetView.diameter = 9;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.25');

      gameTargetView.diameter = 10;
      gameTargetView.setOpacity();

      expect(gameTargetView.el.style.opacity).toEqual('0.25');
    });

  });


  describe('#setTransition', () => {

    beforeEach(() => {
      gameTargetView.setTransition();
    });


    it('Sets the gameTarget node\'s transition duration to between 1s and 3s', () => {
      const durationWithS = gameTargetView.el.style.transitionDuration;
      const removeS = durationWithS.slice(0, -1);
      const duration = parseInt(removeS);

      expect(duration).toBeGreaterThan(0);
      expect(duration).toBeLessThan(4);
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

    it('Sets the target node\'s top value', () => {
      expect(gameTargetView.el.style.top).toBeTruthy();
    });

    it('Sets the target node\'s height value', () => {
      expect(gameTargetView.el.style.height).toBeTruthy();
    });

    it('Sets the target node\'s width value', () => {
      expect(gameTargetView.el.style.height).toBeTruthy();
    });

    it('Sets the target node\'s transition value', () => {
      expect(gameTargetView.el.style.transition).toBeTruthy();
    });

  });


});
