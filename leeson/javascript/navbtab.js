const littleTab = document.querySelector.bind(document);
const muchTab = document.querySelectorAll.bind(document)


const tabs = muchTab('.tab-list')
const panes = muchTab('.tabl_product')


const lineAcvite = littleTab('.tab-list.active')
const line = littleTab('.line')


line.style.left = lineAcvite.offsetLeft + 'px'
line.style.width = lineAcvite.offsetWidth + 'px'


tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function () {
       
        littleTab('.tab-list.active').classList.remove('active')
        littleTab('.tabl_product.active').classList.remove('active')
        
        line.style.left = tab.offsetLeft + 'px'
        line.style.width = tab.offsetWidth + 'px'
        // linee.style.left = this.offsetLeft + 'px'
        // linee.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        pane.classList.add('active')
    }
});