import React, { useState } from "react";

import { useDispatch} from "react-redux";

import { Modal } from "react-bootstrap";

import { addToCart } from "../actions/CartAction";
export default function Pizza({ pizza }) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const addtocarthandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };
  return (
    <>
      <div
        style={{ margin: "70px" }}
        className="shadow-lg p-3 mb-5 bg-white rounded foo"
      >
        <div onClick={handleShow}>
          <h1>{pizza.name}</h1>
          <img
            src={pizza.image}
            alt=""
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div className="flex-container">
          <div className="w-100 m-1">
            <p>Variants</p>
            <select
              className="form-control"
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
            >
              {pizza.variants.length && pizza.variants.map((size) => (
                <option value={size} key={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="w-100 m-1">
            <p>Quantity</p>
            <select
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((x, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-container">
          <div className="m-1 w-100">
            <h1 className="m-1">
              Price: ₹{pizza.prices[0][varient] * quantity}{" "}
            </h1>
          </div>
          <div className="m-1 w-100">
            <button className="btn" onClick={addtocarthandler}>
              Add to cart
            </button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={pizza.image}
              alt=""
              className="img-fluid"
              style={{ height: "400px !important" }}
            />
            <p>{pizza.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
