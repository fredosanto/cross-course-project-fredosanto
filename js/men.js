import { getInCart } from "./utils/addToCart.js";

const url = "https://fredo.one/rainy_days/wp-json/wc/store/products/";
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
            // console.log(jackets[i])

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
                    <a href="/details.html?id=${jackets[i].id}">
                        <img src="${jackets[i].images[0].src}" alt="" />
                    </a>
                    <div class="jacket-list_content"
                        <h3>${jackets[i].name}</h3>
                        <p>${jackets[i].prices.price} NOK</p>
                    </div>
                </div>`;
        }
}
