/* Variables: cámbialas por los id y clase correspondiente */

/* id del enlace que despliega el menú */
var lanzador = "#enlace-menu";

/* id del menú que será desplegado */
var desplegable = "#menu";

/* clase (sin el punto) que muestra el menú */
var despliegaClase = "menu-desplegado";


/* A partir de aquí, puedes dejar el código tal cual */

/* declaramos las funciones */
function nav(){
	var lanz = document.querySelector(lanzador);
	lanz.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu(e){
	e.preventDefault();
	var despl = document.querySelector(desplegable);
	despl.classList.toggle(despliegaClase);
}

/* Agregamos la clase js a la etiqueta html para saber que JS está funcionando */
document.querySelector("html").classList.add("js");


/* ejecutamos la función principal */
nav();


  let currentIndex = 0;
  const itemsPerSlide = 3;
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;

  function moveSlide(direction) {
    const totalSlides = Math.ceil(totalItems / itemsPerSlide);
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;

    const slideWidth = carousel.clientWidth / totalSlides;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

