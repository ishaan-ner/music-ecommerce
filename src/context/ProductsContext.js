import React, { createContext, useState, useEffect } from "react";
import products from "../productsData";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState({});

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
    let currentProduct = tempProducts[index];
    tempProducts[index].inCart = true;
    currentProduct.count = 1;
    const price = currentProduct.price;
    currentProduct.total = price;
    setProductList([...tempProducts]);
  };

  return (
    <ProductsContext.Provider value={{ productList, addToCart }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
