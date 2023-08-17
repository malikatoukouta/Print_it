const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slideTurn = document.querySelector("img.banner-img");
const slideTag = document.querySelector("#tag");
const bullet = `<div class="dot"></div>`;
const dots = document.querySelector(".dots");

// Création de dots
dots.innerHTML = `${bullet.repeat(slides.length)}`;
dots.firstChild.className = "dot dot_selected";


// Dots
let bulletSelected = 0;

function ChangeDot(sens) {
  bulletSelected = bulletSelected + sens;
  bulletPrecedent = bulletSelected - sens;

  if (bulletSelected < 0) {
    bulletSelected = dots.childNodes.length - 1;
  } else if (bulletSelected > dots.childNodes.length - 1) {
    bulletSelected = 0;
  }

  dots.childNodes[bulletPrecedent].className = "dot";
  dots.childNodes[bulletSelected].className = "dot dot_selected";
  console.log(ChangeDot)
}


// Caroussel
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;

  if (numero < 0) {
    numero = slides.length - 1;
  } else if (numero > slides.length - 1) {
    numero = 0;
  }

  slideTurn.src = "./assets/images/slideshow/" + slides[numero].image;
  slideTag.innerHTML = slides[numero].tagLine;
  console.log(ChangeSlide)
}


// Automatisme
setInterval("ChangeSlide(1)", 5000);
setInterval("ChangeDot(1)", 5000);