import { getInCart } from "./utils/addToCart.js";


const bestProductContainer = document.querySelector(".best-products_container");

const cartItems = getInCart();

jackets.forEach((jacket) => {


    let cssClass = "fas";

    const isJacketIncluded = cartItems.find(function(added) {
        console.log(added)

        return added.name === jacket.name;
    })

    // console.log(isJacketIncluded);

    if(isJacketIncluded) {
        cssClass = "far";
    }


    bestProductContainer.innerHTML += `<div class="best-product"
                                            <div>
                                                <a href="/jacket.html">
                                                    <img class="best-product_img" src="${jacket.imgFile}">
                                                </a>
                                                <p>${jacket.name}</p>
                                                <p>${jacket.price}</p>
                                                <div class="add-buttons">
                                                    <i class="${cssClass} fa-cart-shopping add-cart" data-name="${jacket.name}" data-price="${jacket.price}"></i>
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
    this.classList.toggle("far");
    this.classList.toggle("fas");
    
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


function saveItem(cart) {
    localStorage.setItem("cartItems", JSON.stringify(cart));
}