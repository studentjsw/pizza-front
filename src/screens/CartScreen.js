import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

import { addToCart } from "../actions/CartAction";
import { deleteFromCart } from "../actions/CartAction";
import Checkout from "../components/Checkout";
export default function CartScreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          <hr />
          {cartItems.map((item) => (
            <div className="flex-container">
              <div className="text-align-left m-1 w-100">
                <h1>
                  {item.name} [{item.varient}]
                </h1>
                <h1>
                  {" "}
                  Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h1>
                <h1>
                  Quantity :&nbsp;
                  <FaMinusCircle
                    className="fa-minus"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  />{" "}
                  &nbsp;
                  {item.quantity} &nbsp;
                  <FaPlusCircle
                    className="fa-plus"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  />
                </h1>
                <hr />
              </div>
              <div className="m-1 w-100">
                <img
                  src={item.image}
                  alt=""
                  style={{ height: "80px", width: "80px" }}
                />
              </div>
              <div className="m-1 w-100">
                <FaTrash
                  className="fa-trash mt-5"
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 text-align-right">
          <h2 style={{ fontSize: "45px" }}>Sub Total: {subTotal} /-</h2>
          <Checkout subTotal={subTotal} />
        </div>
      </div>
    </div>
  );
}
