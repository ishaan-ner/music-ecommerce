import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import PageNotFound from "./components/PageNotFound";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductsProvider>
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/:id" component={ProductDetails} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </ProductsProvider>
    </React.Fragment>
  );
}

export default App;
