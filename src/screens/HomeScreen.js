import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllPizzas } from "../actions/PizzaAction";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzaReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <div>
      <Filter/>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something Went Wrong" />
        ) : (
          pizzas.map((pizza) => (
            <div className="col-md-4 p-3" key={pizza._Id}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default HomeScreen;
