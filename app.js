// Variable
// Find all the call-to-action buttons
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCart = document.querySelector(".clear-cart");
// Find the "platforms" you will want to modify
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
// Main CART
let cart = [];

// Create Classes (objects)
// Getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
// UI classes
// displaying products
class UI {}
// Local Storage class
class Storage {}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  //Create instances for classes
  const ui = new UI();
  const products = new Products();

  // get all products
  products.getProducts().then((data) => console.log(data));
});
