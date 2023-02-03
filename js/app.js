//========== Enter Game ==============
function GameStart(){
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






// let currentPlayer = 1;
// let player1Health = 100;
// let player2Health = 100;

// const attack = () => {
//   if (currentPlayer === 1) {
//     player2Health -= 10;
//     document.querySelector("#player2Health").innerHTML = player2Health;
//   } else {
//     player1Health -= 10;
//     document.querySelector("#player1Health").innerHTML = player1Health;
//   }
//   checkStatus();
// };

// const block = () => {
//   if (currentPlayer === 1) {
//     player1Health += 5;
//     document.querySelector("#player1Health").innerHTML = player1Health;
//   } else {
//     player2Health += 5;
//     document.querySelector("#player2Health").innerHTML = player2Health;
//   }
// };

// const heal = () => {
//   if (currentPlayer === 1) {
//     player1Health += 10;
//     document.querySelector("#player1Health").innerHTML = player1Health;
//   } else {
//     player2Health += 10;
//     document.querySelector("#player2Health").innerHTML = player2Health;
//   }
// };

// const checkStatus = () => {
//   if (player1Health <= 0) {
//     document.querySelector("#status").innerHTML = "Player 2 wins!";
//     document.querySelector("#attack").setAttribute("disabled", true);
//     document.querySelector("#block").setAttribute("disabled", true);
//     document.querySelector("#heal").setAttribute("disabled", true);
//   } else if (player2Health <= 0) {
//     document.querySelector("#status").innerHTML = "Player 1 wins!";
//     document.querySelector("#attack").setAttribute("disabled", true);
//     document.querySelector("#block").setAttribute("disabled", true);
//   }
// }

// //----------------Creating Player Classes-----------------------
// class Player  {
//   constructor(dance, sing, visual, visualth){
//     this.dance = dance
//     this.sing = sing
//     this.visual = visual
//     this.health = 100;
//   }
// };

// player1 = Player()
// player2 = Player()

// //----------------Move Buttons/Event Listeners-----------------------
// // Add event listeners to the move buttons
// const moveButtons = document.querySelectorAll("#move-button");
// for (let i = 0; i < moveButtons.length; i++) {
//   moveButtons[i].addEventListener("click", function() {
//     const move = playerPokemon.moves[i];
//     opponentPokemon.health -= move.damage;

//     // Check if player is fainted
//     if (opponentPokemon.health <= 0) {
//       alert("Opponent Pokemon fainted!");
//     } else {
//       alert("Opponent Pokemon took " + move.damage + " damage!");
//     }
//   });
// }

// //----------------Health Bar-----------------------

// //Player 1--------------------



// //-----------------------------------------------------------------------------------------

// // Get references to the controls for each player
// // let player1Controls = document.getElementById("player1-controls");
// // var player2Controls = document.getElementById("player2-controls");

// // Initialize a variable to keep track of whose turn it is

// // Function to switch the current player
// function switchPlayer() {
//   currentPlayer = (currentPlayer === 1) ? 2 : 1;
// }

// // Function to hide the controls for one player and show the controls for the other player
// function updateControlsVisibility() {
//   if (currentPlayer === 1) {
//     player1Controls.style.display = "flex";
//     player2Controls.style.display = "none";
//   } else {
//     player1Controls.style.display = "none";
//     player2Controls.style.display = "flex";
//   }
// }

// // Call the updateControlsVisibility function initially to hide the controls for player 2
// updateControlsVisibility();

// // Get references to the controls for each player
// var player1Controls = document.getElementById("player1-controls");
// var player2Controls = document.getElementById("player2-controls");

// // Get references to the health bars for each player
// var player1HealthBar = document

// //------------------------------------------------------------------------------------------

// let currentPlayer = 1;
// // let player1Health = 100;
// // let player2Health = 100;

// //---------------Attack-------------------------------------

// const vocal = () => {
//   if (currentPlayer === 1) {
//     player2Health -= 10;
//     document.querySelector("#health-level").style.width = player2.health + "%"
//   } else {
//     player1Health -= 10;
//     document.querySelector("#health-level-p2").style.width = player1.health;
//   }
//   checkStatus();
//   switchTurn();
// };


// //---------------Block-------------------------------------

// const dance = () => {
//   if (currentPlayer === 1) {
//     player1Health += 5;
//     document.querySelector("#player1Health").innerHTML = player1Health;
//   } else {
//     player2Health += 5;
//     document.querySelector("#player2Health").innerHTML = player2Health;
//   }
//   switchTurn();
// };

// //---------------Heal-------------------------------------
// const visual = () => {
//   if (currentPlayer === 1) {
//     player1Health += 20;
//     document.getElementById("#player1Health").innerHTML = player1Health;
//   } else {
//     player2Health += 20;
//     document.querySelector("#player2Health").innerHTML = player2Health;
//   }
//   switchTurn();
// };

// //----------------Check Health---------------------------------

// const checkStatus = () => {
//   if (player1Health <= 0) {
//     document.querySelector("#status").innerHTML = "Player 2 wins!";
//     document.querySelector("#vocal").setAttribute("disabled", true);
//     document.querySelector("#dance").setAttribute("disabled", true);
//     document.querySelector("#visual").setAttribute("disabled", true);
//   } else if (player2Health <= 0) {
//     document.querySelector("#status").innerHTML = "Player 1 wins!";
//     document.querySelector("#vocal").setAttribute("disabled", true);
//     document.querySelector("#dance").setAttribute("disabled", true);
//     document.querySelector("#visual").setAttribute("disabled", true);
//   }
// };

// //----------------Switch---------------------------------------------
// const switchTurn = () => {
//   if (currentPlayer === 1) {
//     currentPlayer = 2;
//     document.querySelector("#currentPlayer").innerHTML = "Player 2's turn";
//   } else {
//     currentPlayer = 1;
//     document.querySelector("#currentPlayer").innerHTML = "Player 1's turn";
//   }
// };

// document.querySelector("#vocal").addEventListener("click", vocal);
// document.querySelector("#dance").addEventListener("click", dance);
// document.querySelector("#visual").addEventListener("click", visual);
