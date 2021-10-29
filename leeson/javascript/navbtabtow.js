// const littleTab = document.querySelector.bind(document);
// const muchTab = document.querySelectorAll.bind(document)


// const tabs = muchTab('.tab-list')
// const panes = muchTab('.tabl_product')

// const lineeAcvite = littleTab('.tab-list.active')
// const linee = littleTab('.linee')
// linee.style.left = lineeAcvite.offsetLeft + 'px'
// linee.style.width = lineeAcvite.offsetWidth + 'px'


// tabs.forEach((tab, index) => {
//     const pane = panestow[index]
//     tab.onclick = function () {
       
//         littleTab('.tab-list-item.active').classList.remove('active')
//         littleTab('.tabl_product-item.active').classList.remove('active')
        
//         linee.style.left = this.offsetLeft + 'px'
//         linee.style.width = this.offsetWidth + 'px'

//         this.classList.add('active')
//         pane.classList.add('active')
//     }
// });



const littleTabtow = document.querySelector.bind(document);
const muchTabtow = document.querySelectorAll.bind(document);

const lineeAcvite = littleTabtow('.tab-list-item.active')
const linee = littleTabtow('.linee')
linee.style.left = lineeAcvite.offsetLeft + 'px'
linee.style.width = lineeAcvite.offsetWidth + 'px'

const tabstow = muchTabtow('.tab-list-item')
const panestow = muchTabtow('.tabl_product-item')


tabstow.forEach((tabss, index) => {
    const panetow = panestow[index]
    tabss.onclick = function () {
        littleTabtow('.tab-list-item.active').classList.remove('active')
        littleTabtow('.tabl_product-item.active').classList.remove('active')
        linee.style.left = this.offsetLeft + 'px'
        linee.style.width = this.offsetWidth + 'px'
        this.classList.add('active')
        panetow.classList.add('active')
    }
})




