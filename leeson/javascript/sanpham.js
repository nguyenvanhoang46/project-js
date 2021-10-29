$(() => {
    $('.product-photos-item-link img').click(function() {
        let imgPath = $(this).attr('src');
        $('#main-img').attr('src', imgPath);
    })
})


const productimages = document.querySelector('.slides-item');
const slideproductImages = document.querySelectorAll('.slides-item .slide-box-tow')
const prevProduct = document.querySelector('#prevproduct')
const nextProduct = document.querySelector('#nextproduct')
let conuterslides = 0;
const sizeslider = slideproductImages[0].clientWidth;


nextProduct.addEventListener('click', () => {
    productimages.style.transition = "transform 0.4s ease-in-out";
    if (conuterslides == 3) {
        conuterslides = 0;
    }
    conuterslides++;
    productimages.style.transform = `translateX(${-sizeslider * conuterslides}px)`;
})
prevProduct.addEventListener('click', () => {
    productimages.style.transition = "transform 0.4s ease-in-out";
    if (conuterslides == 0) {
        conuterslides = 4;
    }
    conuterslides--;
    productimages.style.transform = `translateX(${-sizeslider * conuterslides}px)`;
})



