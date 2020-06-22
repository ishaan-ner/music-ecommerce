import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import PageNotFound from "./components/PageNotFound";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/:id" component={ProductDetails} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
