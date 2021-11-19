// ------ on fait une fonction pour le jeu ------ //
function guessMyNumber() {
  var numberToGuess = Math.round(Math.random() * 500) + 1;
  console.log(numberToGuess);
  var count = 0;

  var userNumber = parseInt(prompt("Guess my number!"));
  count++
  //console.log("count :", count);

  while (userNumber !== numberToGuess) {
    if (userNumber > numberToGuess) {

      userNumber = parseInt(prompt("Oh non, essaie encore ! Indice : Tu as visé trop haut 😏"));
      count++;
      //console.log("count :", count);
    } else {
      userNumber = parseInt(prompt("Oh non, essaie encore ! Indice : Tu as visé trop bas 😏"));
      count++;
      //console.log("count :", count);
    }

  }
  alert(`🎉 Bien ouèj ! C'était bien ${numberToGuess} ! Tu as trouvé en ${count} essais`);
}

// --- CORRECTION ---- //
// test sur le numberToGuess qui doit être compris entre 1 et 500 inclus
// --> on peut fait un Math.ceil() pour arrondir au supérieur, ou faire un + 1 après un Math.round()
function testRandomNumber(numberToTest) {
  for (var i = 0; i < 1000; i++) {
    var randomNumber = Math.ceil(Math.random() * numberToTest);
    if (randomNumber === numberToTest) {
      console.log(randomNumber);
    }
  }
}


// --- On aurait pus faire un do / while : d'abord exécuter une fois le do, PUIS check la condition avec le while
function guessMyNumberDoWhile() {
  var numberToGuess = Math.round(Math.random() * 500) + 1;
  console.log(numberToGuess);
  var count = 0;

  do {
    var userNumber = parseInt(prompt("Guess my number!"));
    count++
    //console.log("count :", count);
    if (userNumber < numberToGuess) {
      alert("Trop petit !");
    } else if (userNumber > numberToGuess) {
      alert("Trop grand !");
    }
  } while (userNumber !== numberToGuess);

  alert("Bien ouèj");
}

// --- encore une alternative !!! avec l'indice direct dans le prompt --- //
// -- on décompose en fonctions ---- //
var maximumNumber = 500;
var numberToGuess = getRandomNumber(maximumNumber);
var clue = "";
var count = 0;



function getRandomNumber(myNumber) {
  return Math.ceil(Math.random() * myNumber);
}

function getNumberFromUser() {
  var inputNumber = parseInt(prompt("Guess my number! \n" + clue));
  return inputNumber;
}

function initGame(myRange = 500) {
  maximumNumber = myRange;
  numberToGuess = getRandomNumber(maximumNumber);
  clue = "";
  count = 0;
}

function guessMyNumberDoWhileNoAlert(myRange) {
  //getRandomNumber(500);
  initGame(myRange);
  console.log(numberToGuess);
  do {
    var userNumber = getNumberFromUser();
    count++
    //console.log("count :", count);
    if (userNumber < numberToGuess) {
      clue = "Trop petit !";
    } else if (userNumber > numberToGuess) {
      clue = "Trop grand !";
    }
  } while (userNumber !== numberToGuess);

  alert(`Bien ouèj, t'as réussi en ${count} essais !`);
  var playAgain = confirm("Want to play again ?!");

  if (playAgain) {
    guessMyNumberDoWhileNoAlert();
  } else {
    alert("Bouuuuh le gros lâcheuuuuur !");
  }
}

//testRandomNumber(500);
//guessMyNumber();
//guessMyNumberDoWhile();
guessMyNumberDoWhileNoAlert(10);