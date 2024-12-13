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

