// function myFunction() {
//     document.getElementById('menu-item_link').style.cssText = ";display: block !important";
//     console.log("123"); 
// }
// function meFunction() {
//     document.getElementById('menu-item_link').style.cssText = ";display: none !important";
//     console.log("123");  
// }
// 





const carouselSlide = document.querySelector('.slides');
const carouselImges = document.querySelectorAll('.slides .slide');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let counter = 0;
const size = carouselImges[0].clientWidth;


nextBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    if (counter == 3) {
        counter = 0;
    }
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});
prevBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    if (counter == 0) {
        counter = 4;
    }
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});
