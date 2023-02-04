//========== Enter Game ==============
function gameStart(){
  document.getElementById("start-button").style.display = "none";
  document.getElementById("guideBtn").style.display = "none"
  document.getElementById("title").style.display = "none"
  document.getElementById("player1").classList.remove("hidden");
  document.getElementById("player1-controls").classList.remove("hidden");
  document.getElementById("player2").classList.remove("hidden");
  document.getElementById("player2-controls").classList.remove("hidden");
}

//====================Audio============================

const toggle = document.querySelector('#musicToggle');
const music = document.querySelector('#music');

toggle.addEventListener('change', function() {
  if (this.checked) {
    music.play();
  } else {
    music.pause();
  }
});

//========== Instructions ==============
function instructions(){
  alert("In this two player game you can play as Heartthrob or Heartbreaker to battle one another to see who truly is the best.");
  alert("You can lower the other player's hp by singing or do increased damage by dancing");
  alert("If you are hurt, you can use you healing visuals to perk yourself up.")
  alert("May the best idol win!")
}

//================================================================================

      const MAX_HEALTH = 100;

      class Player {
        constructor(name) {
          this.name = name;
          this.health = MAX_HEALTH;
        }

        attack(opponent) {
          opponent.health -= 10;
        }

        heal() {
          this.health = Math.min(this.health + 10, MAX_HEALTH);
        }

        block() {
          this.health += 5;
        }
      }

      const player1 = new Player('Player 1');
      const player2 = new Player('Player 2');

      let currentPlayer = player1;

      const healthDisplay1 = document.getElementById('player1-health');
      const healthDisplay2 = document.getElementById('player2-health');
      const turnDisplay = document.getElementById('turn');

function updateDisplay() {
  healthDisplay1.style.width = `${(player1.health / MAX_HEALTH) * 100}%`;
  healthDisplay2.style.width = `${(player2.health / MAX_HEALTH) * 100}%`;
  turnDisplay.innerText = `${currentPlayer.name}'s turn`;

  const attackButtonP1 = document.getElementById("p1-attack");
  const blockButtonP1 = document.getElementById("p1-block");
  const healButtonP1 = document.getElementById("p1-heal");

  if (currentPlayer === player1) {
    attackButtonP1.style.display = "inline";
    blockButtonP1.style.display = "inline";
    healButtonP1.style.display = "inline";
  } else {
    attackButtonP1.style.display = "none";
    blockButtonP1.style.display = "none";
    healButtonP1.style.display = "none";
  }
}


      updateDisplay();

      function handleAttack() {
        currentPlayer.attack(currentPlayer === player1 ? player2 : player1);
        switchTurn();
      }

      function handleHeal() {
        currentPlayer.heal();
        switchTurn();
      }

      function handleBlock() {
        currentPlayer.block();
        switchTurn();
      }

      function switchTurn() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        updateDisplay();
      }