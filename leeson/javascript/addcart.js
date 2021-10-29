$(document).ready(function () {

    
    

  var buttoncart = document.getElementsByClassName("btn-add-cart");

  for (var i = 0; i < buttoncart.length; i++) {
    buttoncart[i].addEventListener("click", addCartClicked);
  }

  function addCartClicked(event) {
    var button = event.target;
    var parent = button.parentElement.parentElement.parentElement.parentElement;
    console.log(parent);
    var imgetile = parent.getElementsByClassName("card-img-top")[0].src;
    var nametile = parent.getElementsByClassName("name-product")[0].innerText;
    var pricetile = parent.getElementsByClassName("product-price")[0].innerText;

    addToCart(nametile, pricetile, imgetile);
  }

  function addToCart(nametile, pricetile, imgetile) {
    var html = `
    
    <div class="product-box">
    <div class="cardd">
        <img src="${imgetile}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="cat-name">
                <a href="" title="" class="text-center">Laptops</a>
            </div>
            <p class="card-text text-center">Giother Unde Ona</p>
            <div class="price text-center">
                <span class="salee">$1,250.00</span>
                <span class="regular ms-3">$2,999.00</span>
            </div>
            <div class="box-bottom">
                <div class=" mt-2">
                    <button class="btn-add-cart add-cart">
                        <img src="https://creativelayers.net/themes/techno-html/images/icons/add-cart.png"
                            alt=""><span class="ms-3 text-light">Add to Cart</span>
                    </button>
                </div>
                <div class="compare-wishlist">
                    <a href="" class="compare" title="">
                        <img src="https://creativelayers.net/themes/techno-html/images/icons/compare.png"
                            alt="">Compare
                    </a>
                    <a href="" class="wishlist" title="">
                        <img src="https://creativelayers.net/themes/techno-html/images/icons/wishlist.png"
                            alt="">Wishlist
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

    `;
    $("#addcartitem").append(html);
  }
});
