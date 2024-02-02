import get from "./getElement.js";

const emptyAlert = get(".empty-alert");
const cartContentDOM = get(".cart-content");
const cartDOM = get(".cart");

function calculateCartHeight() {
  if (document.querySelectorAll(".cart-product").length < 1) {
    // cart is empty show cart with standard height
    cartDOM.style.height = "252px";
    //  show empty alert
    emptyAlert.style.height = "183px";
  } else {
    // cart contains items
    //  hide empty alert
    emptyAlert.style.height = 0;
    // display cart content
    cartContentDOM.style.height = "auto";
    // update cart height dynamically

    /* 
    cart header = 69px
    cart separator = 2px
    cart content empty = 150
    each cart item = 70px
    from 2 items in the cart, increment 24px margin for each item
    */
    const cartProductDOM = document.querySelectorAll(".cart-product");
    cartDOM.style.height = `${
      69 +
      2 +
      150 +
      cartProductDOM.length * 70 +
      (cartProductDOM.length >= 2 ? 24 * (cartProductDOM.length - 1) : 0)
    }px`;
  }
}

export default calculateCartHeight;
