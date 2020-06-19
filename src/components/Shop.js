import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import PageTitle from "../common/PageTitle";
import { ProductsContext } from "../context/ProductsContext";
import styled from "styled-components";

const Shop = () => {
  const { productList } = useContext(ProductsContext);

  return (
    <div style={{ marginBottom: "3rem" }}>
      <PageTitle>our products</PageTitle>

      <CardGrid>
        {productList.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </CardGrid>
    </div>
  );
};

export default Shop;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  grid-gap: 3rem;
  @media (min-width: 769px) {
    margin: 0 200px;
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;
