export function getInCart() {
    const cart = localStorage.getItem("cartItems");

    if(cart === null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}

export function handleClick() {
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


export function saveItem(cart) {
    localStorage.setItem("cartItems", JSON.stringify(cart));
}