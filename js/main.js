let slideIndex = 0; //variable para el slider
const nav = document.querySelector("#nav"); //variable para el nav
const abrir = document.querySelector("#abrir"); //variable para boton de abrir menu
const cerrar = document.querySelector("#cerrar"); //variable para el boton de cerrar menu


// Funcion para que el video se repita al terminar

var video = document.getElementById('bgvid');
video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
}, false);


// funcion para el slider
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides,6000);
}

showSlides();

//funcion para el menu hamburguesa

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

