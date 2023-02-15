import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/action/index";
import { addCart } from "../redux/action/index";

import "./Cart.css";

function Cart() {
  const cartProducts = useSelector((state) => {
    return state.rootReducers.handleCart;
  });

  return (
    <>
      <div>Cart</div>
      <div className="container">
        <div className="row">
          {cartProducts &&
            cartProducts.map((item, index) => {
              return <CartItems item={item} key={index} />;
            })}
        </div>
      </div>
    </>
  );
}

const CartItems = (props) => {
  // write function to remove item
  const dispatch = useDispatch();
  const removeProduct = () => {
    dispatch(delCart(props.item));
  };

  const addProduct = () => {
    dispatch(addCart(props.item));
  };

  const { title, image, price ,qty } = props.item;

  return (
    /*<>
      <div className="col-12 p-2">
        <div className="cartProduct container d-flex">
          <div className="card col-3 text-red bg-navyBlue">
            <div className="card-body">
              {// <img src={image}/> }
              <div className="cartProduct1" height="250px">
                <img
                  src={image}
                  className="card-img-top"
                  alt=""
                  height="200px"
                />
              </div>
            </div>
            <div className="card-footer">
              <div className="text-center">
                <button
                  onClick={removeProduct}
                  className="btn btn-outline-secondary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="p-2 h5">
              <p>{title}</p>
            </div>
            <div className="p-2 h5">
              <p>
                <span className="label label-success mr-2">$</span>
                {price}
              </p>
            </div>

            <button type="button"
             onClick={addProduct}
             className="btn btn-outline-secondary">INCREMENT (+)</button>

            <button type="button"
             onClick={removeProduct}
             className="btn btn-outline-secondary">DECREMENT (-)</button>

            <p>"Quantity :"{qty}</p>
          </div>
        </div>
      </div>
    </>
  );*/
  <div class="body1">
  <div class="CartContainer1">
  <div class="Header1">
    <h3 class="Heading1">Shopping Cart</h3>
    <h5 class="Action1">Remove all</h5>
  </div>

  <div class="Cart-Items1">
      <div class="image-box1">
        <img src="images/apple.png" style={{  }} />
      </div>
      <div class="about1">
        <h1 class="title1">Apple Juice</h1>
        <h3 class="subtitle1">250ml</h3>
        <img src="images/veg.png" style={{  }}/>
      </div>
      <div class="counter1">
        <div class="btn1">+</div>
        <div class="count1">2</div>
        <div class="btn1">-</div>
      </div>
      <div class="prices1">
        <div class="amount1">$2.99</div>
        <div class="save1"><u>Save for later</u></div>
        <div class="remove1"><u>Remove</u></div>
      </div>
  </div>
  
<div class="checkout1">
<div class="total1">
  <div>
    <div class="Subtotal1">Sub-Total</div>
    <div class="items1">2 items</div>
  </div>
  <div class="total-amount1">$6.18</div>
</div>
<button class="button">Checkout</button></div>
</div>
</div>
  );
}


export default Cart;