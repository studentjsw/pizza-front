import React from "react";

import { useDispatch, useSelector } from "react-redux";

import StripeCheckout from "react-stripe-checkout";

import { placeOrder } from "../actions/OrderAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function  Checkout ({ subTotal }){
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
 function tokenHandler(token) {
   console.log(token);
   dispatch(placeOrder(token, subTotal));
 }
  return (
    <>
      {loading && <Loading />}
      {error && <Error error="Something Went Wrong" />}
      {success && <Success success="Your Order placed Successfully" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ"
        currency="INR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </>
  );
};

