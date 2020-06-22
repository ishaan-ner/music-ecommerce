import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import styled from "styled-components";
import { DetailsButton } from "../common/Button";
import { Link } from "react-router-dom";

const Modal = () => {
  const { modalDetails, isModalOpen, closeModal } = useContext(ProductsContext);
  const { img, title, company, price } = modalDetails;
  if (!isModalOpen) {
    return null;
  } else {
    return (
      <ModalContainer onClick={closeModal}>
        <StyledModal
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <h1>Item added to Cart</h1>
          <div className="modal-img-container">
            <img src={img} alt="Product"></img>
          </div>
          <div>
            <h2>{title}</h2>
            <h3>Company: {company}</h3>
            <h4>Price: ${price}</h4>
          </div>
          <div>
            <Link to="/">
              <DetailsButton onClick={closeModal}>Back to Shop</DetailsButton>
            </Link>
            <Link to="/cart">
              <DetailsButton onClick={closeModal}>Go to Cart</DetailsButton>
            </Link>
          </div>
        </StyledModal>
      </ModalContainer>
    );
  }
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  background-image: var(--gradient-bg);
  padding: 2rem;
  text-align: center;
  .modal-img-container {
    height: 300px;
    width: 300px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  h1 {
    font-family: var(--font-family-primary);
    font-size: 1.3rem;
    text-transform: uppercase;
    color: var(--text-primary);
  }

  h2,
  h3 {
    color: var(--text-secondary);
  }
  h4 {
    color: var(--text-highlight);
    text-transform: uppercase;
  }
`;
