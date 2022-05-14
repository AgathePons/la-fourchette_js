// selecteur par id
var myDiv = document.getElementById('my-div');
console.log(myDiv);

// selector css mais seulement le premier
var myBlueDiv = document.querySelector('.blue');

// selector css all
var allMyLi = document.querySelectorAll('li');

// renvoie contenu purement textuel
myDiv.textContent; // ou innerText pour du contenu purement textuel
// remplace le contenu textuel par Blablablablabla
myDiv.textContent = "Blablablablabla"; // ou innerText

// on modifie le style
myDiv.style.backgroundColor = "#ff7700";
myDiv.style.fontWeight = "bold";
myDiv.style.padding = "1rem";
myDiv.style.color = "#fff";
myDiv.style.fontFamily = "sans serif";

// Ajouter des éléments

// Créer l'élement
var image = document.createElement('img');
image.src = "https://http.cat/404";

// On ajoute un élément à l'intérieur d'un autre
var myTitle = document.createElement('h2');
myTitle.innerText = "Poticha !!! Trop mims";
myDiv.appendChild(myTitle);
myDiv.appendChild(image);

// Voir insertAdjacentHTML(position, text) --> MDN

// on crée un nouveau li dans le ul avec un contenu text saisi par le user
var myChat = document.getElementById('chat');
var newMessage = prompt('your message');
var newLi = document.createElement('li');
newLi.innerText = newMessage;
chat.appendChild(newLi);

