// Resizes font-size based on viewport
window.addEventListener('resize', () => {
  document.querySelector('.timer').style.zIndex = '0';
});

const game = new Game(30);
game.startRound();
