import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import styled from "styled-components";

const CartTable = () => {
  const { cart, removeItem, increment, decrement } = useContext(
    ProductsContext
  );
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Products</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Remove</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
          <tr key={product.id}>
            <td className="cart-img-container">
              <img src={product.img} alt="product"></img>
            </td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td className="control-buttons">
              <CartButton
                onClick={() => decrement(product.id)}
                disabled={product.count === 1}
              >
                -
              </CartButton>
              <CartButton disabled>{product.count}</CartButton>
              <CartButton onClick={() => increment(product.id)}>+</CartButton>
            </td>
            <td>
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => removeItem(product.id)}
              ></i>
            </td>
            <td className="cart-total">${product.total}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default CartTable;

const CartButton = styled.button`
  border: 1px solid var(--text-secondary);
  margin: 0 0.1rem;
  background-color: transparent;
  color: var(--text-secondary);
  width: 2rem;
  margin: 0 0.3rem;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: var(--text-primary);
    border: 1px solid var(--text-primary);
  }
  &:focus {
    outline:none;
  }
  }
`;

const StyledTable = styled.table`
  border-radius: 10px;
  margin: 0 5rem;
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  align-items: center;
  background: var(--gradient-bg);
  box-shadow: var(--box-shadow-light);
  thead,
  tbody {
    display: contents;
  }
  tr {
    display: contents;
  }

  th {
    color: var(--text-primary);
    font-family: var(--font-family-primary);
    font-size: 1rem;
    text-transform: uppercase;
  }

  td {
    color: var(--text-secondary);
    font-family: var(--font-family-secondary);
    text-align: center;
    width: 100%;
    font-size: 0.9rem;
  }

  .cart-img-container {
    width: 5rem;
    height: 5rem;
    justify-self: center;
    box-shadow: var(--box-shadow-light);
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .cart-total {
    color: var(--text-highlight);
    font-size: 1rem;
  }

  .control-buttons {
    display: flex;
    justify-content: center;
  }

  i {
    font-size: 1.2rem;
    &:hover {
      color: var(--text-primary);
    }
    cursor: pointer;
  }
`;
