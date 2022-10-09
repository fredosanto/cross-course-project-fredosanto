import jackets from "./news.js";

const bestProductContainer = document.querySelector(".best-products_container");
const bestProductImgContainer = document.querySelector(".best-products_image")


// jackets.forEach(jacket => {
//     bestProductContainer.innerHTML += `<div class="best-product"
//                                         <div>
//                                         <a href="/jacket.html">
//                                         <img class="best-product_img" src="${jacket.imgFile}">
//                                         </a>
//                                         <p>${jacket.name}</p>
//                                         <p>${jacket.price}</p>
//                                         <div class="add-buttons">
//                                             <button class="add-cart btn">Add to cart</button>
//                                             <button class="favourite btn">Add to favourite</button>
//                                         </div>
//                                         </div>
//                                          </div>`
// })

jackets.forEach((jacket) => {
    bestProductContainer.innerHTML += `<div class="best-product"
                                        <div>
                                        <a href="/jacket.html">
                                        <img class="best-product_img" src="${jacket.imgFile}">
                                        </a>
                                        <p>${jacket.name}</p>
                                        <p>${jacket.price}</p>
                                        <div class="add-buttons">
                                            <i class="fas fa-cart-shopping add-cart" data-name="${jacket.name}" data-price="${jacket.price}"></i>
                                            
                                        </div>
                                        </div>
                                         </div>`
});


const addCartButtons = document.querySelectorAll(".add-buttons i");

addCartButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    // console.log(event);
    this.classList.toggle("fas");
    this.classList.toggle("far");
    
    const jacketName = this.dataset.name;
    const jacketPrice = this.dataset.price;
    // console.log("name", jacketName);

    const currentCart = getInCart();
    // console.log(currentCart);


    const itemInCart = currentCart.find(function(added) {
        return added.name === jacketName;
    });
    
    if (itemInCart === undefined) {
        const item = { name: jacketName, price: jacketPrice };
        currentCart.push(item);
        saveItem(currentCart);
    } else {
        const newCart = currentCart.filter(added => added.name !== jacketName);
        saveItem(newCart);
    }



};

function getInCart() {
    const cart = localStorage.getItem("cartItems");

    if(cart === null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}

function saveItem(cart) {
    localStorage.setItem("cartItems", JSON.stringify(cart));
}