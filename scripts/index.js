// Resizes font-size for viewport
window.addEventListener('resize', () => {
    document.querySelector('#timer').style.zIndex = '0';
});

const game = new Game();
game.startRound();
