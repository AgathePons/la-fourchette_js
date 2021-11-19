var min = 0;
var max = 50;
var scores = [];
// objet de configuration du jeu
var game = {
  'minNumber' : min,
  'maxNumber' : max,
  'numberToGuess': getRandomNumber(min, max),
  'clue' : "",
  'count': 0,
};


function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function testRandomNumber(minimum, maximum) {
  for (var i = 0; i < 100; i++) {
    var randomNumber = getRandomNumber(minimum, maximum);
    if (randomNumber === minimum + 1) {
      console.warn("min atteint: " ,randomNumber);
    } else if (randomNumber === maximum) {
      console.warn("max atteint: " ,randomNumber);
    } else {
      //console.log(randomNumber);
    }
  }
}

function getNumberFromUser() {
  var inputNumber = parseInt(prompt("Guess my number! \n" + game.clue));
  return inputNumber;
}

function initGame() {
  game['count'] = 0;
  game['clue'] = "";
  game['numberToGuess'] = getRandomNumber(min, max);
}

function playAgain() {
  var playAgain = confirm("Want to play again ?!");
  if (playAgain) {
    play();
  } else {
    //console.log(scores);
    // pour chaque entrée du tableau, on affiche une ligne dans la console
    for (let i = 0; i < scores.length; i++) {
      console.log(`Partie n°${i + 1}: ${scores[i]} essai(s)`);
    }
  }
}

function play() {
  // On initie le jeu en remettant à 0
  initGame();
  console.log("numberToGuess:", game.numberToGuess);
  // on lance la boucle
  do {
    var userNumber = getNumberFromUser();
    game.count++
    console.log("count :", game.count);
    if (userNumber < game.numberToGuess) {
      game.clue = "Trop petit !";
    } else if (userNumber > game.numberToGuess) {
      game.clue = "Trop grand !";
    }
  } while (userNumber !== game.numberToGuess);
  // on sort de la boucle et on dit bravo
  alert(`Bien ouèj, t'as réussi en ${game.count} essais !`);
  // on ajoute le count au tableau des scores
  scores.push(game.count);
  // on rejoue ?
  playAgain();
}

//testRandomNumber(0, 50);
play();