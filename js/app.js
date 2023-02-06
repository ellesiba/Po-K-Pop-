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
  document.getElementById("p2-special").style.display = "none";

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
  alert("If you need a larger health boost, you can use your visual abiility to have fans perk you up!")
  alert("And you can wink at fans to land a critical attack of your opponent.");
  alert("There is always a chance that your character may mess up, so think about your moves carefully.")
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
          opponent.health -= 30;
        }

        heal() {
          this.health = Math.min(this.health + 25, MAX_HEALTH);
        }

        block() {
          this.health += 15;
        }

        specialAttack(opponent) {
          opponent.health -= 50;
        }
      }

      const player1 = new Player('Heartthrob');
      const player2 = new Player('Heartbreaker');

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
  const specialButtonP1 = document.getElementById("p1-special")

  const attackButtonP2 = document.getElementById("p2-attack");
  const blockButtonP2 = document.getElementById("p2-block");
  const healButtonP2 = document.getElementById("p2-heal");
  const specialButtonP2 = document.getElementById("p2-special")
  
  if (currentPlayer === player1) {
    attackButtonP1.style.display = "inline";
    blockButtonP1.style.display = "inline";
    healButtonP1.style.display = "inline";
    specialButtonP1.style.display = "inline";
  
  } else {
    attackButtonP1.style.display = "none";
    blockButtonP1.style.display = "none";
    healButtonP1.style.display = "none";
    specialButtonP1.style.display = "none";

  }
  if (currentPlayer === player2) {
    attackButtonP2.style.display = "inline";
    blockButtonP2.style.display = "inline";
    healButtonP2.style.display = "inline";
    specialButtonP2.style.display = "inline";
  
  } else {
    attackButtonP2.style.display = "none";
    blockButtonP2.style.display = "none";
    healButtonP2.style.display = "none";
    document.getElementById("p2-special").style.display = "none";
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
      document.getElementById("player2-controls").classList.add("hidden");
      alert("Hearbreaker wins!");
      document.getElementById("p2-wins").classList.remove("hidden");

    } if (player2.health <= 0) {
        document.getElementById("start-button").style.display = "none";
        document.getElementById("guideBtn").style.display = "none"
        document.getElementById("title").style.display = "none"
        document.getElementById("player1").classList.add("hidden");
        document.getElementById("player1-controls").classList.add("hidden");
        document.getElementById("player2").classList.add("hidden");
        document.getElementById("player1-controls").classList.add("hidden");   
        alert("Hearthrob wins!");
        document.getElementById("p1-wins").classList.remove("hidden");        
        }
      }

//======================== Hit or Miss ===============================
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function hitOrMissAttack(){
  let x = getRandomInt(10);
  if (x <= 2){
      alert(`${currentPlayer.name} sang in the wrong key, the attack was ineffective.`)
  }if (x >= 3){
    currentPlayer.attack(currentPlayer === player1 ? player2 : player1);
  }
}

function hitOrMissSpecial(){
  let x = getRandomInt(10);
  if (x <= 7){
    alert(`The fans did not find ${currentPlayer.name}'s wink charming. It was ineffective.`)
  }if (x >= 8){
    currentPlayer.specialAttack(currentPlayer === player1 ? player2 : player1);
  }
}

function hitOrMissHeal(){
  let x = getRandomInt(10);
  if (x <= 3){
    alert(`${currentPlayer.name} accidentally picked the wrong angle... The fans were not impressed... It was ineffective.`)
  }if (x >= 4){
    currentPlayer.heal(currentPlayer === player1 ? player2 : player1);
  }
}

function hitOrMissBlock(){
  let x = getRandomInt(10);
  if (x <= 5){
    alert(`${currentPlayer.name} stumbled on a dance step. It was ineffective.`)
  }if (x >= 6){
    currentPlayer.block(currentPlayer === player1 ? player2 : player1);
  }
}



  //====================== Action & Switch ==================================    
  function handleAttack() {
    hitOrMissAttack()
    winner()
    switchTurn();
  }

  function handleHeal() {
    // currentPlayer.heal();
    hitOrMissHeal()
    winner()
    switchTurn();
    }

    function handleBlock() {
      // currentPlayer.block();
      hitOrMissBlock()
      winner()
      switchTurn();
    }

    function handleSpecialAttack() {
      hitOrMissSpecial()
      winner()
      switchTurn();
    }

    function switchTurn() {
     currentPlayer = currentPlayer === player1 ? player2 : player1;
      updateDisplay();
    }