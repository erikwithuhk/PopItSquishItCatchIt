// Resizes font-size based when viewport is resized
window.addEventListener('resize', () => {
  document.querySelector('.timer').style.zIndex = '0';
  document.querySelector('.current-score').style.zIndex = '0';
});

const bubblesTheme = new BubblesTheme();

const game = new Game(bubblesTheme, 30);
game.startGame();
