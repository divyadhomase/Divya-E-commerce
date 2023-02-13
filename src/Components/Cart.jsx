import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/action/index";
import { addCart } from "../redux/action/index";

import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => {
    return state.rootReducers.handleCart;
  });

  const [cartProducts, setCart] = useState(cart);

  useEffect(() => {
    const cartElements = JSON.parse(localStorage.getItem("cart"));
   
    cartElements &&
      cartElements.length &&
      setCart(() => {
        return cartElements;
      });
  }, []);

  useEffect(() => {
    setCart(() => {
      return cart;
    });
  }, [cart]);

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
    <>
   
      <div className="col-12 p-2">
        <div className="cartProduct container d-flex">
          <div className="col-2 text-red bg-navyBlue">
            
              {/* <img src={image}/> */}
              <div className="cartProduct1" height="250px">
                <img
                  src={image}
                  className="card-img-top"
                  alt=""
                  height="250px"
                />
              </div>
            
          </div>

          <div className="col-9">
            <div className="p-2 h5">
              <p>{title}</p>
            </div>

            <div className="p-2 h5">
              <p>Each</p>
            </div>
            <div className="p-2 h4">
              <p>
                <span className="label label-success mr-2">$</span>
                {price}
              </p>
            </div>

            <button
              type="button"
              onClick={addProduct}
              className="btn btn-outline-secondary"
            >
              INCREMENT (+)
            </button>

            <button
              type="button"
              onClick={removeProduct}
              className="btn btn-outline-secondary"
            >
              DECREMENT (-)
            </button>

            <p>"Quantity :"{qty}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Cart;
