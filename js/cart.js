import { getInCart } from "./utils/addToCart.js";

const cartItems = getInCart();

const cartContainer = document.querySelector(".cart");

if (cartItems.length === 0) {
    cartContainer.innerHTML = "Cart is empty";
}

cartItems.forEach((item) => {
    cartContainer.innerHTML += `<div class="product-container">
                                    <div class="top-sellers_products">
                                    <a href="/jacket.html">
                                        <img src="/images/raincoat_product.png"
                                        alt="picture of the black rain jacket"/>
                                        </div>
                                        <div class="top-sellers_content">
                                            <p>${item.name}</p>
                                            <p>${item.price}</p>
                                        </div>
                                    </a>
                                </div>`;
});