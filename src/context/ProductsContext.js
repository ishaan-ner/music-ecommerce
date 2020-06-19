import React, { createContext, useState, useEffect } from "react";
import products from "../productsData";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [productDetails, setProductDetails] = useState({});

  // Function to copy the data array containing the product information without mutation
  // This is needed because the data array contains objects, and a simple spread operator will not suffice

  const initializeProductData = () => {
    let tempProducts = [];
    products.forEach((item) => {
      const eachItem = { ...item };
      tempProducts = [...tempProducts, eachItem];
    });
    setProductList(tempProducts);
  };

  // Now we set the state when the component mounts with the useEffect hook
  useEffect(() => {
    initializeProductData();
  }, []);

  const addToCart = (id) => {
    let tempProducts = [...productList];
    const index = tempProducts.findIndex((item) => item.id === id);
    tempProducts[index].inCart = true;
    setProductList([...tempProducts]);
  };

  const getCurrentProduct = (id) => {
    const productDetails = productList.find((product) => product.id === id);
    return productDetails;
  };

  const handleDetails = (id) => {
    const productDetails = getCurrentProduct(id);
    setProductDetails(productDetails);
  };

  return (
    <ProductsContext.Provider
      value={{ productList, addToCart, productDetails, handleDetails }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
