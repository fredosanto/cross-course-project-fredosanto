import { getInCart } from "./utils/addToCart.js";

const url = "https://fredo.one/rainy_days/wp-json/wc/store/products";
const jacketContainer = document.querySelector(".jacket-list_container");


const cartItems = getInCart();

async function getJackets() {
    try {
        const response = await fetch(url);
        const getData = await response.json();

        const jackets = getData;
        // console.log(jackets);

        jacketContainer.innerHTML += "";

        createHTML(jackets)
    }

    catch(error) {
        console.log(error);
    }
}

getJackets();


function createHTML(jackets) {
    for(let i = 0; i < jackets.length; i++) {
            
            if(jackets[i].categories[0].id !== 27) {
                continue;
            }
            console.log(jackets[i])


            let cssClass = "fas";

            const isJacketIncluded = cartItems.find(function(added) {
            // console.log(added)

            return added.name === jackets.name;
            })
            
            // console.log(isJacketIncluded);

            if(isJacketIncluded) {
                cssClass = "far";
            }

            jacketContainer.innerHTML += 
                `<div class="jacket-list_item">
                    <a href="/jacket.html">
                        <img src="${jackets[i].images[0].src}" alt="" />
                    </a>
                    <div class="jacket-list_content"
                        <h3>${jackets[i].name}</h3>
                        <p>${jackets[i].prices.price} NOK</p>
                        <div class="add-buttons">
                        <i class="${cssClass} fa-cart-shopping add-cart" data-name="${jackets[i].name}" data-price="${jackets[i].prices.price}"></i>
                        </div>
                    </div>
                </div>`;
        }
        const addCartButtons = document.querySelectorAll(".add-buttons i");
        
        addCartButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });

        handleClick()
}

//ADD THIS TO THE <div class="add-buttons"
// <i class="${cssClass} fa-cart-shopping add-cart" data-name="${jackets[i].name}" data-price="${jackets[i].prices.price}"></i>

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