//========== Enter Game ==============
function gameStart(){
  document.getElementById("start-button").style.display = "none";
  document.getElementById("guideBtn").style.display = "none"
  document.getElementById("title").style.display = "none"
  document.getElementById("player1").classList.remove("hidden");
  document.getElementById("player1-controls").classList.remove("hidden");
  document.getElementById("player2").classList.remove("hidden");
  document.getElementById("p2-attack").style.display = "none";
  document.getElementById("p2-block").style.display = "none";
  document.getElementById("p2-heal").style.display = "none";
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
  alert("In this two player game you can play as Heartthrob or Heartbreaker to battle one another to see who truly is the best idol.");
  alert("You can lower the other player's hp with your amazing singing skills.");
  alert("You can soften a hit with some killer dance moves.")
  alert("And if you need a larger health boost, you can use your visual abiility to have fans perk you up!")
  alert("May the best idol win!")
}

//=============================== Attack/ Heal SetUp ======================================

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
          this.health = Math.min(this.health + 15, MAX_HEALTH);
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
  // turnDisplay.innerText = `${currentPlayer.name}'s turn`;

  const attackButtonP1 = document.getElementById("p1-attack");
  const blockButtonP1 = document.getElementById("p1-block");
  const healButtonP1 = document.getElementById("p1-heal");

  const attackButtonP2 = document.getElementById("p2-attack");
  const blockButtonP2 = document.getElementById("p2-block");
  const healButtonP2 = document.getElementById("p2-heal");
  
  if (currentPlayer === player1) {
    attackButtonP1.style.display = "inline";
    blockButtonP1.style.display = "inline";
    healButtonP1.style.display = "inline";
    
  
  } else {
    attackButtonP1.style.display = "none";
    blockButtonP1.style.display = "none";
    healButtonP1.style.display = "none";
  }
  if (currentPlayer === player2) {
    attackButtonP2.style.display = "inline";
    blockButtonP2.style.display = "inline";
    healButtonP2.style.display = "inline";
  
  } else {
    attackButtonP2.style.display = "none";
    blockButtonP2.style.display = "none";
    healButtonP2.style.display = "none";
  }
  
  }

      updateDisplay();
//============================== If Wins ===============================
  function winner(){
    if (player1.health <= 0) {
      document.getElementById("start-button").style.display = "none";
      document.getElementById("guideBtn").style.display = "none"
      document.getElementById("title").style.display = "none"
      document.getElementById("player1").classList.add("hidden");
      document.getElementById("player1-controls").classList.add("hidden");
      document.getElementById("player2").classList.add("hidden");
      document.getElementById("p2-attack").style.display = "none";
      document.getElementById("p2-block").style.display = "none";
      document.getElementById("p2-heal").style.display = "none";
      document.getElementById("p2-wins").classList.remove("hidden");
      alert("Hearbreaker wins!");
      document.getElementById("p2-wins").classList.remove("hidden");

    } if (player2.health <= 0) {
        document.getElementById("start-button").style.display = "none";
        document.getElementById("guideBtn").style.display = "none"
        document.getElementById("title").style.display = "none"
        document.getElementById("player1").classList.add("hidden");
        document.getElementById("player1-controls").classList.add("hidden");
        document.getElementById("player2").classList.add("hidden");
        document.getElementById("p2-attack").style.display = "none";
        document.getElementById("p2-block").style.display = "none";
        document.getElementById("p2-heal").style.display = "none";
        document.getElementById("p1-wins").classList.remove("hidden");        
        alert("Hearthrob wins!");
        document.getElementById("p1-wins").classList.remove("hidden");        
        }
      }

  //====================== Action & Switch ==================================    
  function handleAttack() {
    currentPlayer.attack(currentPlayer === player1 ? player2 : player1);
    winner()
    switchTurn();
  }

  function handleHeal() {
    currentPlayer.heal();
    winner()
    switchTurn();
    }

    function handleBlock() {
      currentPlayer.block();
      winner()
      switchTurn();
    }

    function switchTurn() {
     currentPlayer = currentPlayer === player1 ? player2 : player1;
      updateDisplay();
    }