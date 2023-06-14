import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap";

import "./App.css";

import MainBar from "./components/Navbar";
import AdminScreen from "./screens/AdminScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderScreen from "./screens/OrderScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <div className="App">
      <MainBar />
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/cart" exact component={CartScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/orders" exact component={OrderScreen} />
          <Route path="/admin" component={AdminScreen} />
          {/* <Route path="/admin/addpizza" component={<AddPizza />} />
          <Route path="/admin/editpizza" component={<EditPizza />} />
          <Route path="/admin/orderlist" component={<OrderList />} />
          <Route path="/admin/pizzalist" component={<PizzaList />} />
          <Route path="/admin/userlist" component={<UserList />} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
