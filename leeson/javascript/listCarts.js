var listCarts = localStorage.getItem("cards")
  ? JSON.parse(localStorage.getItem("cards"))
  : [];

$(() => {
  var html = render(listCarts);
  $("#cards").append(html);
 
  addEventAmountUp();
  deleteEvent()
  document.getElementById('price-total').innerText = totalTemp();
  
});

const render = (list) => {
  var html = list.map((product, index) => {
    return `
        <div class="cart-item-box d-flex">
            <div class="item-box-cart d-flex">
                <div class="img-product-item-box">
                    <img src="${product.image}" alt="" class="img-fluid mCS_img_loaded">
                </div>
                <div class="name-product-item ms-5">
                     ${product.name}
                </div>
                <div class="price-cart ms-5">${product.price} </div>
            </div>
            <div class="quanlity-box ms-5">
                <button class="btn shadow btn-down fas fa-minus" data-id=${product.id}></button>
                <input type="text" class="soluong form-control shadow-none" readOnly name="number" value="${product.quantity}" min="1" max="100">
                <button class="btn shadow btn-up fas fa-plus" data-id=${product.id}></button>
            </div>
            <div class="total ms-5 mt-3">
              ${product.totaltow}
             </div>
            <button type="" class="btn mt-4 ms-5 detele shadow-none fas fa-trash-alt deleteBtn" data-id="${product.id}"></button>
        </div>
        `;
  });
  return html;
};


const deleteEvent = () => {
  let buttonDelete = document.getElementsByClassName('detele');
  for (let i = 0; i < buttonDelete.length; i++) {
    buttonDelete[i].addEventListener('click',deleteProduct)
  }
}

const deleteProduct = (e) => {
  e.target.parentElement.remove();
  let id = e.target.getAttribute('data-id');
  let index = listCarts.findIndex(item => item.id == id);
  listCarts.splice(index,1);
  localStorage.setItem('cards', JSON.stringify(listCarts));
}

const addEventAmountUp = () => {
  let buttonUp = document.getElementsByClassName("btn-up");
  let buttonDown = document.getElementsByClassName("btn-down");
  for (let i = 0; i < buttonUp.length; i++) {
    buttonUp[i].addEventListener("click", changeAmountUp);
  }
  for (let i = 0; i < buttonDown.length; i++) {
    buttonDown[i].addEventListener("click", changeAmountDown);
  }
};

const changeAmountUp = (e) => {
  let button = e.target;
  let id = button.getAttribute('data-id');
  let index = listCarts.findIndex(item => item.id == id);
  let input = button.parentElement.getElementsByClassName('soluong')[0];
  input.value++;
  let btnTotal = button.parentElement.parentElement.getElementsByClassName('total')[0];
  let buttontow = e.target;
  let div = Number(buttontow.parentElement.parentElement.getElementsByClassName('price-cart')[0].innerText);
  let calculate = 0
  calculate = div * input.value;
  btnTotal.innerHTML = calculate;
  var array = {
    ...listCarts[index],
    totaltow: calculate,  
    quantity:  input.value,
  }
  listCarts[index] = array;
  localStorage.setItem('cards', JSON.stringify(listCarts));
  document.getElementById('price-total').innerText = totalTemp();
}
const changeAmountDown = (e) => {
  let button = e.target;
  let id = button.getAttribute('data-id');
  let index = listCarts.findIndex(item => item.id == id);
  let input = button.parentElement.getElementsByClassName('soluong')[0];
  input.value--;
  if (input.value < 1) {
    input.value = 1;
  }
  let btnTotal = button.parentElement.parentElement.getElementsByClassName('total')[0];
  let buttontow = e.target;
  let div = Number(buttontow.parentElement.parentElement.getElementsByClassName('price-cart')[0].innerText);
  let calculate = 0
    calculate = div * input.value;
  btnTotal.innerHTML = calculate;
  var array = {
    ...listCarts[index],
    totaltow: calculate,   
  }
  listCarts[index] = array;
  localStorage.setItem('cards', JSON.stringify(listCarts));
  document.getElementById('price-total').innerText = totalTemp();
}

const totalTemp = () => {
  let sum = 0;
  listCarts.forEach(item => {
    sum += item.totaltow;
  });
  return sum;
}










