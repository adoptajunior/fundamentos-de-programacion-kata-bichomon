console.log(document.title);

// 01
const gen1 = document.getElementById("gen-1");
gen1.innerText = "Generasión 1 Pokimon";

// 02

// let fondoRojo = gen1.querySelectorAll('.infocard');
// fondo.style.background = red;
// gen1.fondo.style.background = 'red';
// document.getElementsByClassName(".infocard")
// fondo.style.background = 'red';

// let fondo = document.getElementById("gen-1");
// fondo.querySelectorAll();

/*
let fondo = document.getElementsByClassName('infocard');
console.log(fondo.hasAttribute('background-color'));
fondo.style.background = 'red';
*/

// Document.getElementsByClassName('infocard-list').style.background = 'red';

// Get a NodeList of all .demo elements
/*
const tititi = document.getElementsByClassName('.infocard-list');
tititi.forEach(element => {
    element.style.background = 'blue';
});
*/
const demoClasses = document.querySelectorAll('.infocard');
// const generacion1 = demoClasses.slice(0, 150);
// console.log(demoClasses.slice(0, 150));
// Change the text of multiple elements with a loop
demoClasses.forEach(element => {
    // element.textContent = 'All demo classes updated.';
    element.style.background = 'red';
});




// Access the first element in the NodeList
demoClasses[0];

// 03
const laUrl = document.URL;
console.log(laUrl);

// 04
// const dominio = Document.domain;
const currentHostname = location.hostname;
console.log(currentHostname);

// 05 Nodos ???
const imagenes = Document.images;
console.log(imagenes);

// 06
/*
const img = document.querySelector('img');
const cambioSrc = img.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
console.log(cambioSrc);
*/
/*
for (const image of document.images) {
    if (image.src === "banner.gif") {
      console.log("Found the banner");
    }
  }
*/

for (const imagen of document.images) {
    imagen.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}