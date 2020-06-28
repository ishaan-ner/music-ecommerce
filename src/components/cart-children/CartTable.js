import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { StyledTable } from "../../common/StyledComponents";
import { CartButton } from "../../common/Button";

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
