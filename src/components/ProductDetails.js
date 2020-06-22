import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { DetailsButton } from "../common/Button";
import PageTitle from "../common/PageTitle";

const ProductDetails = () => {
  const { productList, addToCart, openModal } = useContext(ProductsContext);
  const match = useParams();
  const currentProduct = productList.find((product) => product.id === match.id);
  return currentProduct ? (
    <React.Fragment>
      <PageTitle>{currentProduct.title}</PageTitle>
      <DetailsBox>
        <div className="details-img">
          <img src={currentProduct.img} alt="product" />
        </div>

        <div className="product-details">
          <h2>Company: {currentProduct.company}</h2>
          <h3>Price: ${currentProduct.price}</h3>
          <p>Some information about this product:</p>
          <p>{currentProduct.info}</p>
          <Link to="/">
            <DetailsButton>Back to Shop</DetailsButton>
          </Link>
          <DetailsButton
            onClick={() => {
              addToCart(currentProduct.id);
              openModal(currentProduct.id);
            }}
            disabled={currentProduct.inCart}
          >
            {currentProduct.inCart ? (
              <span>In Cart</span>
            ) : (
              <span>Add to Cart</span>
            )}
          </DetailsButton>
        </div>
      </DetailsBox>
    </React.Fragment>
  ) : (
    <div></div>
  );
};

export default ProductDetails;

const DetailsBox = styled.div`
display:flex;
margin 4rem auto 0 auto;
padding: 2rem;
width: 90%;
color: var(--text-primary);
background: var(--gradient-bg);
box-shadow: var(--box-shadow-light);
.details-img {
   img {
    width:100%;
    height:100%
    object-fit:cover;
  }
}
.product-details {
  margin-left: 2rem;
}

h2,h3 {
  margin-bottom: 3rem;
}

p {
  color: var(--text-secondary);
}

p:first-of-type { 
  font-size: 1.2rem;
}

h3:first-of-type {
  color: var(--text-highlight);
}
@media(max-width:900px){
  flex-direction:column;
}
`;
