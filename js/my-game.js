var min = 0;
var max = 50;
var scores = [];
// game config object
var game = {
  'minNumber': min,
  'maxNumber': max,
  'numberToGuess': getRandomNumber(min, max),
  'clue': "",
  'count': 0,
};
// html elements
const titleText = document.getElementById('title-text');
const playButton = document.getElementById('play-button');
const guessButton = document.getElementById('submit-user-number');
const gameFormBloc = document.getElementById('game-form-bloc');
const userNumberInput = document.getElementById('user-number-input');
const clueParagraph = document.getElementById('user-result-p');
const clueBloc = clueParagraph.parentNode;
const tableScoreBody = document.getElementById('table-score-body');

// ------ events ------ //
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

// ------ functions ------ //
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

function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

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

// test random number to check
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

// Prevent default if enter key pressed on input, click button instead
userNumberInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    console.log('press enter detected: click button instead');
    event.preventDefault();
    guessButton.click();
  }
})