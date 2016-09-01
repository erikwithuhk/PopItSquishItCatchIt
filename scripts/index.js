function kill(node) {
  window.setInterval(() => {
    document.body.removeChild(node)
  }, 30000);
}

let id = 1;
window.setInterval(() => {
  const gameTargetViewTest = new GameTargetView(id);
  gameTargetViewTest.render();
  document.body.appendChild(gameTargetViewTest.el)
  id += 1;
  kill(gameTargetViewTest.el);
}, 500);
