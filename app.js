let playerLives = 1;
let enemyLives = 999999999999999;

function attack(attackType) {
  /*Reduce vidas del jugador y enemigo según el ataque*/
  const playerDamage = Math.floor(Math.random() * 1) + 1;
  const enemyDamage = Math.floor(Math.random() * 999999999) + 9;

  playerLives -= enemyDamage;
  enemyLives -= playerDamage;

  /*Actualizar vidas mostradas en la página*/
  document.getElementById('player-lives').textContent = playerLives;
  document.getElementById('enemy-lives').textContent = enemyLives;

  /*Verificar si alguien perdió todas las vidas*/
  if (playerLives <= 0) {
    alert('¡Perdiste! KAITO SIN DERECHOS te ha derrotado');
    resetGame();
  } else if (enemyLives <= 0) {
    alert('¡Has ganado! ¡Derrotaste a KAITO!');
    resetGame();
  }
}

function resetGame() {
  /*Reiniciar vidas y actualizar la página*/
  playerLives = 5;
  enemyLives = 5;
  document.getElementById('player-lives').textContent = playerLives;
  document.getElementById('enemy-lives').textContent = enemyLives;
}
