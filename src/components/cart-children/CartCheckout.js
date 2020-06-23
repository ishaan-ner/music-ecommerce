import React, { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../context/ProductsContext";
import { NavButton } from "../../common/Button";

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

const StyledCheckout = styled.div`
  background: var(--gradient-bg);
  box-shadow: var(--box-shadow-light);
  letter-spacing: 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 1rem 2rem;
  width: 40%;
  margin: 2rem 5rem 1rem auto;
  font-family: var(--font-family-primary);
  color: var(--text-primary);
  text-transform: uppercase;
`;

const CheckOutButton = styled(NavButton)`
  margin: 1rem 1rem 0 0;
  border-radius: 5px;
  padding: 0.4rem 0.5rem;
  background-color: ${(props) => props.color || "var(--text-danger-dark)"};
  &:hover {
    color: var(--text-primary);
    background-color: ${(props) => props.color || "var(--text-danger-light)"};
  }
`;
