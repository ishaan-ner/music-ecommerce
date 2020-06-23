import React, { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../context/ProductsContext";
import { NavButton } from "../../common/Button";

const CartCheckout = () => {
  const { cart, clearCart } = useContext(ProductsContext);

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
      <CheckOutButton onClick={clearCart}>Clear Cart</CheckOutButton>
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
  background-color: var(--text-danger-dark);
  margin: 1rem 0;
  border-radius: 2px;
  padding: 0.2rem 0.3rem;
  &:hover {
    color: var(--text-primary);
    background-color: var(--text-danger-light);
  }
`;
