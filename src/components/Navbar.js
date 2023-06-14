import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../actions/UserAction";
import logo from "../images/logo.png"
export default function MainBar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <div>
      <Navbar className="nav-title shadow-lg p-2 mb-2 bg-white rounded page-title ">
        <Container>
          <Navbar.Brand className="head-title">
            <img src={logo} alt={logo.name} />
          </Navbar.Brand>

          <Nav className="title ml-auto">
            {currentUser ? (
              <div className="dropdown mt-2 ">
                <a
                  
                  style={{ color: "black", textDecoration: "none" }}
                  className=" dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/orders">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/logout"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart {cartState.cartItems.length}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
