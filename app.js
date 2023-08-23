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

      let products = Array.from(data.items);
     
      products = products.map(item =>{

        const {title, price} = item.fields
        const {id} = item.sys
        const { image } = item.fields.image.fields.file.url;
        //NOTE: image is undefined with local JSON file
        return {title, price, id, image}

      })
      return products;

    } catch (error) {
      console.log(error);
    }
  }
}
// UI classes
// displaying products
class UI {
    displayProducts(products){
      let result = ``;
      products.forEach((product) => {
        // Create the HTML element
        result += `
            <!-- single product -->
            <article class="product">
                <div class="img-container">
                    <img src="${product.image}" alt="" class="product-img" />
                    <button class="bag-btn" data-id=${product.id}>
                        <i class="fas-fa-shopping-cart"></i>
                        add to bag
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>$ ${product.price}</h4>
            </article>
            <!-- end of single product -->
            `;
      });

      // Insert it into DOM
      productsDOM.innerHTML = result;
    }
}
// Local Storage class
class Storage {}
//__________________________________________________
// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  //Create instances for classes
  const ui = new UI();
  const products = new Products();

  // get all products
  products.getProducts().then((products) => 
   ui.displayProducts(products) );
});
