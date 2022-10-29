const url = "https://fredo.one/rainy_days/wp-json/wc/store/products/?featured=true";
const bestProductContainer = document.querySelector(".best-products_container");

async function getFeaturedJackets() {
    try {
        const response = await fetch(url);
        const featuredJackets = await response.json();

        console.log(featuredJackets);

        featuredJackets.forEach(function(jacket) {
            bestProductContainer.innerHTML += `<div class="best-product"
                                                    <div>
                                                        <a href="/details.html?id=${jacket.id}">
                                                            <img class="best-product_img" src="${jacket.images[0].src}" alt="">
                                                        </a>
                                                        <p>${jacket.name}</p>
                                                        <p>${jacket.prices.price} ${jacket.prices.currency_code}</p>
                                                    </div>
                                                </div>`
        });
    }

    catch(error) {
        console.log(error);
    }
}

getFeaturedJackets()