// LOADER
const loader = document.querySelector('.preloader');

setTimeout(function(){ loader.style.display='none';
loader.style.webkitTransition  = 'opacity 3s ease-in-out';
loader.style.transition = 'opacity 3s ease-in-out';}, 3500);

// Bouton Burger :
const burgerBtn = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

burgerBtn.addEventListener("click", toggleNav)

function toggleNav() {
    burgerBtn.classList.toggle("active") 
    navigation.classList.toggle("active") 
}


// Slider :
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper', {
        // Options de configuration ici
        loop: true, // Pour créer une boucle infinie
        effect: 'coverflow', // Effet 3D
        grabCursor: true, // Curseur de type 'main' au survol des slides
        centeredSlides: true, // Slide actif centré
        slidesPerView: 'auto', // Nombre de slides visibles en même temps
        coverflowEffect: {
            rotate: 0, // Angle de rotation des slides
            stretch: 50, // Espacement entre les slides
            depth: 300, // Profondeur des slides
            modifier: 2, // Vitesse de transition
            slideShadows: false, // Ombres des slides
        },
        loop: true,
    })
})
