// var listCart = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];

// let products = [
//     {
//         img: "//cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f.jpg?v=1616831599",
//         name: "Apple iPad Mini",
//         tag: "greytshirt",
//         price: '1,250,00',
//         sale: '2,999,00',
//       },
//     {
//         img: "//cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-4_compact.jpg?v=1616831009",
//         name: 'Apple iPad Mini',
//         tag: 'greytshirt',
//         price: "1,250,00",
//         sale: '2,999,00',
//       },
//     {
//         img: "//cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_31898603-4ce2-4ce5-9aa4-e75f9dbbbcfb_compact.jpg?v=1616831234",
//         name: 'Apple iPad Mini',
//         tag: 'greytshirt',
//         price: '1,250,00',
//         sale: '2,999,00'
//       },
//     {
//         img: "//cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f.jpg?v=1616831599",
//         name: 'Apple iPad Mini',
//         tag: 'greytshirt',
//         price: '1,250,00',
//         sale: '2,999,00',
//       }
// ]

// $(() => {
//     var buttonAddCart = document.getElementsByClassName('btn-add-cart');
//     var html = render(products);
//     $('#list-product').append(html);
//     for (var i = 0; i < buttonAddCart.length; i++) {
//         buttonAddCart[i].addEventListener('click', productCart)
//     }

//     const productCart = (e) => {
//         var parent = e.target.parentElement.parentElement.parentElement.parentElement;
//         var img = parent.getElementsByClassName("card-img-top")[0].src;
//         var name = parent.getElementsByClassName("name-product")[0].innerText;
//         var price = parent.getElementsByClassName("product-price")[0].innerText;
//         var sale = parent.getElementsByClassName("product-sale")[0].innerText;
//         var cartproduct = {
//             name: name,
//             image: img,
//             price: price,
//             sale: sale,
//         }

//         listCart.push(cartproduct);

//         localStorage.setItem('carts', JSON.stringify(listCart));
//     }
// })

// const render = (list) => {
//     var html = list.map((product) => {
//         return `
//      <div class="col-lg-3 col-sm-6" style="width: 22%;">
//          <div class="product-box">
//              <div class="cardd">
//                      <img src="${product.img}" class="card-img-top" alt="...">
//                      <div class="card-body">
//                         <div class="cat-name">
//                             <a class="text-center name-product">${product.name}</a>
//                         </div>
//                       <p class="card-text text-center">Giother  Unde Ona</p>
//                       <div class="price text-center">
//                         <span class="salee">$<span class="product-price">${product.price}</span></span>
//                          <span class="regular product-sale ms-3">$${product.sale}</span>
//                      </div>
//                      <div class="box-bottom">
//                          <div class=" mt-2">
//                              <button class="btn-add-cart add-cart add-cart">
//                                  <img src="https://creativelayers.net/themes/techno-html/images/icons/add-cart.png" alt=""><span class="ms-3 text-light">Add to Cart</span>
//                              </button>
//                          </div>
//                          <div class="compare-wishlist">
//                              <a href="" class="compare" title="">
//                                  <img src="https://creativelayers.net/themes/techno-html/images/icons/compare.png" alt="">Compare
//                             </a>
//                             <a href="" class="wishlist" title="">
//                                 <img src="https://creativelayers.net/themes/techno-html/images/icons/wishlist.png" alt="">Wishlist
//                             </a>
//                         </div>
//                      </div>
//                  </div>            
//              </div> 
//          </div>
//      </div>
//         `
//     })
//     return html;
// } 
