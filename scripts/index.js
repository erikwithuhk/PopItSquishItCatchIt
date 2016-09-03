// Resizes font-size based on viewport
window.addEventListener('resize', () => {
  document.querySelector('.timer').style.zIndex = '0';
});

alert('This is working');

const game = new Game(30);
game.startRound();
