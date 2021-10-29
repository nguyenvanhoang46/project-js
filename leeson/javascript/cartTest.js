
$(document).ready(function () {
  var listCard = localStorage.getItem("cards")
    ? JSON.parse(localStorage.getItem("cards"))
    : [];
  var renderProduct = [];
  async function getProducts() {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      renderProduct =  [...data];
      $("#productss").append(() => {
        return renderProduct.map((product) => {
            return `
                <div class="col-lg-3 col-sm-6 product-item" data-id="${product.id}" style="width: 22%;">
                    <div class="product-box">
                        <div class="cardd">
                            <img src="${product.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="cat-name">
                                    <a class="text-center name-product">${product.name}</a>
                                </div>
                              <p class="card-text tag-product text-center">${product.tag}</p>
                              <div class="price text-center">
                                <span class="salee">$<span class="product-price">${product.price}</span></span>
                                <span class="regular product-sale ms-3">$${product.sale}</span>
                            </div>
                            <div class="box-bottom">
                                <div class=" mt-2">
                                    <button class="btn-add-cart add-cart add-cart">
                                        <img src="https://creativelayers.net/themes/techno-html/images/icons/add-cart.png" alt=""><span class="ms-3 text-light">Add to Cart</span>
                                    </button>
                                </div>
                                <div class="compare-wishlist">
                                    <a href="" class="compare" title="">
                                        <img src="https://creativelayers.net/themes/techno-html/images/icons/compare.png" alt="">Compare
                                    </a>
                                    <a href="" class="wishlist" title="">
                                        <img src="https://creativelayers.net/themes/techno-html/images/icons/wishlist.png" alt="">Wishlist
                                    </a>
                                </div>
                            </div>
                            </div>
                          </div> 
                    </div>
                  </div> 
                `;
          });
      });
      addEvent();
    });
  }
  getProducts();



// renderListProduct(renderProduct);
addEvent = () => {
var buttonCard = document.getElementsByClassName("btn-add-cart");
  for (var i = 0; i < buttonCard.length; i++) {
    buttonCard[i].addEventListener("click", addProduct);
  }
};

const addProduct = (e) => {
  var parent = e.target.parentElement.parentElement.parentElement.parentElement;
  let id = parent.parentElement.parentElement.getAttribute('data-id');
  var img = parent.getElementsByClassName("card-img-top")[0].src;
  var name = parent.getElementsByClassName("name-product")[0].innerText;
  var tag = parent.getElementsByClassName("tag-product")[0].innerText;
  var price = parent.getElementsByClassName("product-price")[0].innerText;
  var sale = parent.getElementsByClassName("product-sale")[0].innerText;
  let totaltow = +price;
  var card = {
    id: id,
    name: name,
    image: img,
    price: price,
    sale: sale,
    totaltow,
    quantity: 1,
  };
  listCard.push(card);
  localStorage.setItem("cards", JSON.stringify(listCard));
};

});
