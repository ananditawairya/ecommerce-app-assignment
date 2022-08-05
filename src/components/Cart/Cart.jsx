import React from "react";
import "./Cart.scss";
function Cart() {
  return (
    <div className="cart_modal">
    <section className="cart_container">
      <header className="cart_header">
        <h3 className="cart_heading">My Cart (1 item)</h3>
        <span className="close">X</span>
      </header>
      <div className="cart_main_contents">
        <div className="cart_items_details">
          <img src="" alt="" className="item_image" />
          <div className="item_purchase_details">
            <h2 className="item_name"></h2>
            <div className="item_stock_price">
              <div className="item_stock">
                <button className="increment_cart_quantity"></button>
                <span className="cart_quantity"></span>
                <button className="decrement_cart_quantity"></button>
              </div>
              <span className="cart_multiply">X</span>
              <span className="item_price"></span>
            </div>
          </div>
          <span className="total_item_price"></span>
        </div>
        <div className="guaranty_section">
          <img src="" alt="" className="guaranty_image" />
          <p className="guaranty_text">You won't find it cheaper anywhere</p>
        </div>
      </div>
      <div className="checkout_section">
        <p className="promo_code">Promo code can be applied on payment page</p>
        <button className="checkout_button">
          <span className="checout_button_text">Proceed to Checkout</span>
          <span className="item_checkout_price">{`Rs.XXX >`}</span>
        </button>
      </div>
    </section>
    </div>
  );
}

export default Cart;
