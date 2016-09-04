// Resizes font-size based when viewport is resized
window.addEventListener('resize', () => {
  document.querySelector('.timer').style.zIndex = '0';
  document.querySelector('.current-score').style.zIndex = '0';
});

const game = new Game(30);
game.startRound();
