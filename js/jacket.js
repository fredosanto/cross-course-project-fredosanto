const jacketImage = document.querySelector(".main-image_container");
const jacketHeader = document.querySelector(".order-header");
const jacketContent = document.querySelector(".product-text_container");
const errorMessage = document.querySelector(".product-section_container")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://fredo.one/rainy_days/wp-json/wc/store/products/" + id;


async function jacketDetails () {
    try {

        const response = await fetch(url);
        const result = await response.json();

        const jacket = result;
        console.log(jacket);

        addJacketHtml(jacket)
    }

    catch(error) {
        console.log(error);
        errorMessage.innerHTML = `<div class="error-message">
                                    <p><b>Sorry something wrong happened...<b></p>
                                    <p>Please try again</p>
                                    </div>`;
    }
}

jacketDetails();

function addJacketHtml(jacket) {
    document.title = `Jacket | ${jacket.name}`;
    jacketImage.innerHTML = `<div class="jacket-image">
                                 <img src="${jacket.images[0].src}"
                                    alt="${jacket.images[0].srcset.alt}"/>
                            </div>`;
                  
    jacketHeader.innerHTML = `<h1>${jacket.name}</h1>
                                <h2>${jacket.prices.price} ${jacket.prices.currency_code}</h2>
                                `;   
    
    jacketContent.innerHTML = `<p><b>${jacket.short_description}</b></p>
                                <p>${jacket.description}</p>`;
                               
                                

}