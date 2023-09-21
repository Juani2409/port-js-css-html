// toggle iconoooo
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Seccion que mantiene activa la palabra en el nav mientras se scrollea

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active')
            document.querySelector('header nav a[href*= ' + id + ']').classList.add('active')
        })

    }

})
    
// Seccion nav

let header = document.querySelector('header')

header.classList.toggle('sticky', window.scrollY > 100)


// remueve el icono  cuando se hace click en el nav


menuIcon.classList.toggle('active');
navbar.classList.remove('bx-x');




}

// movimiento de cada sector
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
})
ScrollReveal().reveal('.home-content, .heading', {origin:'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'})



// tipeado que aparece

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Front End', 'Back End'],
    typeSpeed: 100,
    backSpeed: 30,
backDelay: 1000,
loop:true
})




// modo diaaa-noche
// function enableDarkMode(){
//     let main_body = document.body
//     main_body.classList.toggle('light-mode')
// }



//Boton descarga CV

// const boton = document.getElementById('miBoton');

// boton.addEventListener('mouseover', () => {
//   boton.textContent = 'Descargar';
// });

// boton.addEventListener('mouseout', () => {
//   boton.textContent = 'CV';
// });



// Funcion para los iconos de tecnologias


// Obtener todos los elementos con la clase 'icon-link'
const iconLinks = document.querySelectorAll('.icon-link');

// Agregar un escuchador de eventos de clic a cada elemento
iconLinks.forEach(function(iconLink) {
  iconLink.addEventListener('click', function(event) {
    // Evitar el comportamiento predeterminado del enlace (evitar la navegación)
    event.preventDefault();

    // Alternar una clase CSS para cambiar la apariencia del ícono
    this.classList.toggle('active');
  });
});
