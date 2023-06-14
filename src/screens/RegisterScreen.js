import React, { useState} from "react";

import { useSelector, useDispatch } from "react-redux";

import { registerUser } from "../actions/UserAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;
  const dispatch = useDispatch();
  const registerhandler = () => {
    if (password !== confirmpassword) {
      alert("Password do not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  };
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-align-left shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email Already Registered" />}
          <h2 style={{ fontSize: "35px" }}>Register</h2>
          <div>
            <input
              required
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="confirmpassword"
              className="form-control"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={registerhandler} className="btn mt-3 mb-3">
              REGISTER
            </button>
            <br />
            <a style={{ color: "black" }} href="/login" className="lg-title">
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
