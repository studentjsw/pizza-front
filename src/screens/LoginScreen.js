import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../actions/UserAction";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginState;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: "35px" }}>LOGIN</h2>
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
          <div>
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

            <button
              onClick={loginHandler}
              className="btn mt-3 mb-3 text-decoration-none"
            >
              LOGIN
            </button>
            <br />
            <a style={{ color: "black" }} href="/register" className="lg-title">
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
