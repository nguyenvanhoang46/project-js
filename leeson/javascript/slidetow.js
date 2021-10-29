
const imageboxSlide = document.querySelector('.owl-carousel-item-box');
const imageboxImges = document.querySelectorAll('.imagebox-item-box-tow');
// console.log(imageboxImges);
const nextBtnn = document.querySelector('#next-btn');
const prevBtnn = document.querySelector('#prev-btn');
let countertow = 0;
const sizetow = imageboxImges[0].clientWidth;
nextBtnn.addEventListener('click', ()=> {
	imageboxSlide.style.transition = "transform 0.4s ease-in-out";
	if (countertow == 0) {
		countertow = 15;
	}
	countertow--;
	imageboxSlide.style.transform = `translateX(${-sizetow * countertow}px)`;
})
prevBtnn.addEventListener('click', ()=> {
	imageboxSlide.style.transition = "transform 0.4s ease-in-out";
	if (countertow == 12) {
		countertow = 0;
	}
	countertow++;
	imageboxSlide.style.transform = `translateX(${-sizetow * countertow}px)`;
})

