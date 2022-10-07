import jackets from "./news.js";

const bestProductContainer = document.querySelector(".best-products_container");
const bestProductImgContainer = document.querySelector(".best-products_image")


jackets.forEach(jacket => {
    bestProductContainer.innerHTML += `<div class="best-product"
                                        <div>
                                        <a href="/jacket.html">
                                        <img class="best-product_img" src="${jacket.imgFile}">
                                        </a>
                                        <p>${jacket.name}</p>
                                        <p>${jacket.price}</p>
                                        <div class="add-buttons">
                                            <button class="add-cart btn"><span>Add to cart</span></button>
                                            <button class="favourite btn">Add favourite</button>
                                        </div>
                                        </div>
                                         </div>`
})