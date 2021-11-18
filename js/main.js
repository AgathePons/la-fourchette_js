// ------ on fait une fonction pour le jeu ------ //
function guessMyNumber() {
  // On crée un chiffre entier un peu random
  var numberToGuess = Math.round(Math.random() * 500);
  console.log(numberToGuess);
  // On initie le count à 0
  var count = 0;
  // On récupère la saisie du user et on la parse en type number
  var userNumber = parseInt(prompt("Guess my number!"));
  console.log(typeof userNumber, ":", userNumber);
  // on incrémente le count de 1 après la première saisie
  count++
  console.log("count :", count);
  // Tant que le userNumber n'est pas === au numberToGuess :

  while (userNumber !== numberToGuess) {
    // on compare pour pouvoir lui dire si c'est plus ou moins
    // Si il est trop haut
    if (userNumber > numberToGuess) {

      userNumber = parseInt(prompt("Oh non, essaie encore ! Indice : Tu as visé trop haut 😏"));
      console.log(typeof userNumber, ":", userNumber);
      // On incrémente le count
      count++;
      console.log("count :", count);
    }
    // Sinon si il est trop bas
    else {

      userNumber = parseInt(prompt("Oh non, essaie encore ! Indice : Tu as visé trop bas 😏"));
      console.log(typeof userNumber, ":", userNumber);
      // On incrémente le count
      count++;
      console.log("count :", count);
    }

  }
  // Quand il a trouvé, on lui dit bravo et c'est fini
  alert(`🎉 Bien ouèj ! C'était bien ${numberToGuess} ! Tu as trouvé en ${count} essais`);

}

guessMyNumber();