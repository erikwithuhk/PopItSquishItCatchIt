class GameTargetView {
  constructor(id) {
    this.gameTarget = new GameTarget();
    this.id = id;
    this.diameter = null;
    this.top = null;
    this.transition = null;
    this.el = document.createElement('div');
    this.el.setAttribute('class', 'circle');
    this.el.setAttribute('id', `circle${this.id}`);
  }
  setClickListener() {
    this.el.addEventListener('click', () => {
      this.el.style.transition = 'all 0.5s';
      this.el.style.opacity = 0;
      this.el.style.height = '20rem';
      this.el.style.width = '20rem';
      setTimeout(() => {
        document.body.removeChild(this.el);
      }, 500);
    });
  }
  setTopValue() {
    // Sets top value to a random number between 0 and 100
    this.top = Math.random() * 100;
    this.el.style.top = `${this.top}%`;
  }
  setDiameter() {
    // Sets height and width values to a random integer between 1 and 10
    this.diameter = Math.floor(Math.random() * 9) + 1;
    this.gameTarget.setPointValue('bubbles', this.diameter);
    this.el.style.height = `${this.diameter}rem`;
    this.el.style.width = `${this.diameter}rem`;
  }
  setOpacity() {
    if (this.diameter < 2) {
      this.el.style.opacity = 1;
    } else if (this.diameter < 5) {
      this.el.style.opacity = 0.75;
    } else if (this.diameter < 8) {
      this.el.style.opacity = 0.5;
    } else {
      this.el.style.opacity = 0.25;
    }
  }
  setTransition() {
    // Sets transition value to a random number between 1 and 3
    this.transition = Math.random() * 2 + 1;
    this.el.style.transition = `all ${this.transition}s`;
  }
  render() {
    this.setDiameter();
    this.setOpacity();
    this.setTopValue();
    this.setTransition();
    this.setClickListener();
    setTimeout(() => {
      this.render()
    }, 500);
  }
  // resetDiameterTopValues() {
  //   window.setInterval(function() {
  //     const circleNode = node;
  //     const newDiameter = randomDiameter();
  //     const newTransition = randomTime();
  //     circleNode.style.transition = `all ${newTransition}s`;
  //     this.setDiameter();
  //     const variance = `${initialTop + topVariance()}%`
  //     circleNode.style.top = variance;
  //     circleOpacity(circleNode, newDiameter);
  //   }, 2500);
  // }
}
