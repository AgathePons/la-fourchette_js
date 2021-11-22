var min = 0;
var max = 50;
// objet de configuration du jeu
var game = {
  'minNumber': min,
  'maxNumber': max,
  'numberToGuess': getRandomNumber(min, max),
  'clue': "",
  'count': 0,
  'scores': [],
};

// On peut stocker une fonction dans un objet qu'on appelera avec monObjet.maFonction(arg1, arg2)

/**
 * 
 * @param {number} min le nombre mininmum qui peut être généré
 * @param {number} max le nombre maximum qui peut être généré
 * @returns {number} renvoie le nombre généré en random entre le min et le max
 */
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function testRandomNumber(minimum, maximum) {
  for (var i = 0; i < 100; i++) {
    var randomNumber = getRandomNumber(minimum, maximum);
    if (randomNumber === minimum) {
      console.warn("min atteint: ", randomNumber);
    } else if (randomNumber === maximum) {
      console.warn("max atteint: ", randomNumber);
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
    //console.log(game.scores);
    // pour chaque entrée du tableau, on affiche une ligne dans la console
    for (let i = 0; i < game.scores.length; i++) {
      console.log(`Partie n°${i + 1}: ${game.scores[i]} essai(s)`);
    }
  }
}

// autre façon d'afficher les score en une alerte sur plusieurs lignes
function playAgainAlert() {
  var playAgain = confirm("Want to play again ?!");
  var stringCore = "";
  if (playAgain) {
    play();
  } else {
    //console.log(game.scores);
    // pour chaque entrée du tableau, on affiche une ligne dans la console
    for (let i = 0; i < game.scores.length; i++) {
      //console.log(`Partie n°${i + 1}: ${game.scores[i]} essai(s)`);
      stringCore += `Partie n°${i + 1}: ${game.scores[i]} essai(s)\n`;
    }
    alert(stringCore);
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
  game.scores.push(game.count);
  // on rejoue ?
  playAgainAlert();
}

//testRandomNumber(0, 50);
play();