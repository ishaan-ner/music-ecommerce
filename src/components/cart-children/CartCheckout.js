import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { StyledCheckout } from "../../common/StyledComponents";
import { CheckOutButton } from "../../common/Button";

const CartCheckout = () => {
  const { cart, clearCart, handlePayment } = useContext(ProductsContext);

  const calculateTotals = () => {
    const arrayOfTotals = cart.map((product) => product.total);
    const subTotal = arrayOfTotals.reduce((a, b) => a + b, 0);
    let tax = (subTotal * 11) / 100;
    tax = parseFloat(tax.toFixed(2));
    const total = subTotal + tax;
    return { subTotal, tax, total };
  };

  const { subTotal, tax, total } = calculateTotals();

  return (
    <StyledCheckout>
      <p>Subtotal: ${subTotal}</p>
      <p>Tax: ${tax}</p>
      <p>Total: ${total}</p>
      {cart.length > 0 && (
        <div>
          <CheckOutButton onClick={clearCart}>Clear Cart</CheckOutButton>
          <CheckOutButton color="var(--text-highlight)" onClick={handlePayment}>
            Check out
          </CheckOutButton>
        </div>
      )}
    </StyledCheckout>
  );
};

export default CartCheckout;
