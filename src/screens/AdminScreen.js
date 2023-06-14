import React, { useEffect } from "react";

import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";

import { Switch, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import AddPizza from "../Admin/AddPizza";
import EditPizza from "../Admin/EditPizza";
import OrderList from "../Admin/OrderList";
import PizzaList from "../Admin/PizzaList";
import UserList from "../Admin/UserList";
// import { useSelector, useDispatch } from "react-redux";
const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/admin/pizzalist")}>
                All Pizzas
              </Button>
              <Button onClick={() => history.push("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button>
              {/* <Button onClick={() => history.push("/admin/editpizza")}>
                Edit Pizza
              </Button> */}
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin" component={UserList} exact />
              <Route path="/admin/userlist" component={UserList} exact />
              <Route
                path="/admin/editpizza/:pizzaid"
                component={EditPizza}
                exact
              />
              <Route path="/admin/pizzalist" component={PizzaList} exact />
              <Route path="/admin/addnewpizza" component={AddPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
