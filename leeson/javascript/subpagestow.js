
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);


// const stabs = $$('.sitem-tow-tabs');
// const spanes = $$('.sproductdetails-tabs');

// const tabsActives = $('.sitem-tow-tabs.active')
// const lavi = $('.lavi')
// lavi.style.left = tabsActives.offsetLeft + 'px'
// lavi.style.width = tabsActives.offsetWidth + 'px'

// stabs.forEach((tab, index) => {
//     const spane = spanes[index]
    
//    tab.onclick = function () {
//     console.log(spane); 
//     $('.sitem-tow-tabs.active').classList.remove('active')
//     $('.sproductdetails-tabs.active').classList.remove('active')

//     lavi.style.left = this.offsetLeft + 'px'
//     lavi.style.width = this.offsetWidth + 'px'

//     this.classList.add('active')
//     spane.classList.add('active')
//    }
// });


const $$$ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const stabs = $$('.sitem-tow-tabs');
const spanes = $$('.sproductdetails-tabs');

const tabsActives =$$$('.sitem-tow-tabs.active')
const lavi = $$$('.lavi')
lavi.style.left = tabsActives.offsetLeft + 'px'
lavi.style.width = tabsActives.offsetWidth + 'px'

stabs.forEach((tab, index) => {
    const spane = spanes[index]
    
   tab.onclick = function () {
    console.log(spane); 
    $$$('.sitem-tow-tabs.active').classList.remove('active')
    $$$('.sproductdetails-tabs.active').classList.remove('active')

    lavi.style.left = this.offsetLeft + 'px'
    lavi.style.width = this.offsetWidth + 'px'

    this.classList.add('active')
    spane.classList.add('active')
   }
});