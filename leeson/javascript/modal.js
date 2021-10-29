const buyBtns = document.querySelectorAll('.js-buy-cart')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
function showBuyModal() {
    modal.classList.add('open')
}
function diheBuyModal() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyModal)
    
}
modalClose.addEventListener('click', diheBuyModal)



