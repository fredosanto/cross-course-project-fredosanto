export function getInCart() {
    const cart = localStorage.getItem("cartItems");

    if(cart === null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}