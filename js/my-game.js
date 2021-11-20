var min = 0;
var max = 50;
var scores = [];
// objet de configuration du jeu
var game = {
  'minNumber': min,
  'maxNumber': max,
  'numberToGuess': getRandomNumber(min, max),
  'clue': "",
  'count': 0,
};


function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function testRandomNumber(minimum, maximum) {
  for (var i = 0; i < 100; i++) {
    var randomNumber = getRandomNumber(minimum, maximum);
    if (randomNumber === minimum + 1) {
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
  // remove input value
  userNumberInput.value = "";
  // remove clue text content
  clueParagraph.textContent = "";
  clueBloc.classList.remove('focused');
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
//play();

const titleText = document.getElementById('title-text');
const playButton = document.getElementById('play-button');
const guessButton = document.getElementById('submit-user-number');
const gameFormBloc = document.getElementById('game-form-bloc');
const userNumberInput = document.getElementById('user-number-input');
const clueParagraph = document.getElementById('user-result-p');
const clueBloc = clueParagraph.parentNode;
const tableScoreBody = document.getElementById('table-score-body');

playButton.addEventListener('click', function (event) {
  // initializing the game
  initGame();
  console.log("numberToGuess:", game.numberToGuess);
  // hide play button
  playButton.classList.add('hidden');
  // display game form
  gameFormBloc.classList.remove('hidden');
});

guessButton.addEventListener('click', function (event) {
  var userInputValue = userNumberInput.value;
  console.log("user guess:", userInputValue);
  // +1 to count
  game.count++;
  console.log('count:', game.count);

  if (userInputValue < game.numberToGuess) {
    clueParagraph.textContent = "Trop bas !";
    clueBloc.classList.remove('focused');
    setTimeout(function() {
      clueBloc.classList.add('focused');
    }, 300);
  } else if (userInputValue > game.numberToGuess) {
    clueParagraph.textContent = "Trop haut !";
    clueBloc.classList.remove('focused');
    setTimeout(function() {
      clueBloc.classList.add('focused');
    }, 300);
  } else {
    // say well done
    titleText.textContent = "Bien ouèj"
    // hide the game form
    gameFormBloc.classList.add('hidden');
    // put the play button back with new text content
    playButton.textContent = "Want to play again ?";
    playButton.classList.remove('hidden');
    // add score
    scores.push(game.count);
    console.log(scores);
    // build new line in table score
    buildLineScore();
  }
});

function buildLineScore() {
  // build tr
  var newLine = document.createElement('tr');
  newLine.setAttribute('id', `game-line-${scores.length}`);
  tableScoreBody.appendChild(newLine);
  // call functions to build td
  buildCellGame();
  buildCellAttemps();
}

function buildCellGame() {
  // build first td
  var newGameTd = document.createElement('td');
  newGameTd.setAttribute('id', `game-cell-${scores.length}`);
  newGameTd.textContent = `Game n°${scores.length}`;
  document.getElementById(`game-line-${scores.length}`).appendChild(newGameTd);
}

function buildCellAttemps() {
  // build second td
  var newAttempsTd = document.createElement('td');
  newAttempsTd.setAttribute('id', `attemps-cell-${scores.length}`);
  newAttempsTd.textContent = `number of attemps: ${game.count}`;
  document.getElementById(`game-line-${scores.length}`).appendChild(newAttempsTd);
}

// Prevent default if enter key pressed on input, click button instead
userNumberInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    console.log('press enter detected: click button instead');
    event.preventDefault();
    guessButton.click();
  }
})