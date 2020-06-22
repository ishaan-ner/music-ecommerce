import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import CartTable from "./cart-children/CartTable";
import PageTitle from "../common/PageTitle";
import CartCheckout from "./cart-children/CartCheckout";

const Cart = () => {
  const { cart } = useContext(ProductsContext);
  return (
    <div>
      {cart.length === 0 ? (
        <PageTitle>Shopping Cart is Empty</PageTitle>
      ) : (
        <PageTitle>Shopping Cart</PageTitle>
      )}
      <CartTable />
      <CartCheckout />
    </div>
  );
};

export default Cart;
