// Menu mobile
let btnmenu = document.querySelector('header .burger')
let closeBtn = document.querySelector('header .closeBtn')
let menulist = document.querySelector('header nav ul')
btnmenu.addEventListener('click', function(){
    menulist.classList.toggle('opened')
})
closeBtn.addEventListener('click', function(){
    menulist.classList.toggle('opened')
})

// Navbar
let navbar = document.querySelector('.navbar')
document.addEventListener('scroll',function(){
    if(window.scrollY>0){navbar.classList.add('fixed')}
    else{navbar.classList.remove('fixed')}
}) 


var swiperService = new Swiper(".services-list", {
    slidesPerView: 3,
    autoplay: false,
    speed: 1000,
    loop: true,
    spaceBetween: 50, //init: false,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
        1024: { slidesPerView: 2},
        768: { slidesPerView: 1},
        640: { slidesPerView: 1},
        320: { slidesPerView: 1}
    }
});

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// Accordion
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
// Accordion