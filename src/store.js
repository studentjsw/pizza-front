import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/CartReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
} from "./reducers/OrderReducer";
import {
  getAllPizzaReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  editPizzaReducer,
} from "./reducers/PizzaReducer";
import {
  loginUserReducer,
  registerUserReducer,
  getAllUsersReducer,
} from "./reducers/UserReducer";
const finalReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editPizzaReducer: editPizzaReducer,
  getAllUsersReducer: getAllUsersReducer,
  getAllOrdersReducer: getAllOrdersReducer,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
 };
const composeEnhancers = composeWithDevTools({})
// const middleware = [thunk];
const store = createStore(finalReducer,initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;