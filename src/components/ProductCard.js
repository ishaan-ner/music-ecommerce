import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = (props) => {
  const { addToCart, openModal } = useContext(ProductsContext);
  const { id, title, img, price, inCart } = props.product;
  return (
    <Link to={`/${id}`}>
      <Card>
        <div className="img-container">
          <img src={img} alt="product" />

          <CartButton
            onClick={(e) => {
              e.preventDefault();
              addToCart(id);
              openModal(id);
            }}
            disabled={inCart}
            className="cart-button"
          >
            {inCart ? <p>In Cart</p> : <i className="fas fa-shopping-cart" />}
          </CartButton>
        </div>
        <div className="card-footer">
          <p>{title}</p>
          <span>${price}</span>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const CartButton = styled.button`
  background-color: var(--light-bg);
  z-index: 1;
  border-radius: 10px;
  padding: 0.3rem 0.4rem;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 2rem;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  transition: all 0.5s ease;
  transform: translate(200%, 200%);
  & p {
    margin: 0;
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
`;

const Card = styled.div`
  background-image: var(--gradient-bg);
  z-index: 0;
  border-radius: 12px;
  padding: 3rem 3rem 0 3rem;
  box-shadow: var(--box-shadow-light);
  cursor: pointer;
  transition: all 0.5s ease;
  & .img-container {
    height: 300px;
    position: relative;
    overflow: hidden;
  }
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 1s;
  }
  & .card-footer {
    display: flex;
    height: 4rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: var(--text-primary);
    & span {
      font-size: 1.1rem;
      color: var(--text-highlight);
    }
    @media (max-width: 320px) {
      font-size: 0.6rem;
    }
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
    .cart-button {
      transform: translate(0);
    }
    box-shadow: var(--box-shadow-dark);
  }
`;
