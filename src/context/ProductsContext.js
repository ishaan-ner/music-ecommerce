import React, { createContext, useState, useEffect } from "react";
import products from "../productsData";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  // Function to copy the data array containing the product information without mutation
  // This is needed because the data array contains objects, and a simple spread operator will not suffice

  const deepCopyData = (productArray) => {
    let tempProducts = [];
    productArray.forEach((item) => {
      const eachItem = { ...item };
      tempProducts = [...tempProducts, eachItem];
    });
    return tempProducts;
  };

  // Now we initialize the product state when the component mounts with the useEffect hook
  // This could later be replaced by a GET request to an API
  useEffect(() => {
    const newProductList = deepCopyData(products);
    setProductList(newProductList);
  }, []);

  const prepProductForCart = (product) => {
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    return product;
  };

  const addToCart = (id) => {
    const tempProducts = deepCopyData(productList);
    const index = tempProducts.findIndex((item) => item.id === id);
    const currentProduct = prepProductForCart(tempProducts[index]);
    tempProducts[index] = currentProduct;
    setProductList(tempProducts);
    const tempCart = deepCopyData(cart);
    setCart([...tempCart, { ...currentProduct }]);
  };

  const openModal = (id) => {
    setModalOpen(true);
    const currentProduct = getProduct(id, productList);
    setModalDetails({ ...currentProduct });
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalDetails({});
  };

  const getProduct = (id, dataArray) => {
    const tempArray = deepCopyData(dataArray);
    const singleProduct = tempArray.find((product) => product.id === id);
    return singleProduct;
  };

  const increment = (id) => {
    let tempCart = deepCopyData(cart);
    let currentProduct = getProduct(id, cart);
    currentProduct.count += 1;
    currentProduct.total += currentProduct.price;
    tempCart = tempCart.map((product) =>
      product.id === currentProduct.id ? currentProduct : product
    );
    setCart([...tempCart]);
  };

  const decrement = (id) => {
    let tempCart = deepCopyData(cart);
    let currentProduct = getProduct(id, cart);
    currentProduct.count -= 1;
    currentProduct.total -= currentProduct.price;
    tempCart = tempCart.map((product) =>
      product.id === currentProduct.id ? currentProduct : product
    );
    setCart([...tempCart]);
  };

  const removeItem = (id) => {
    let tempCart = deepCopyData(cart);
    let tempProducts = deepCopyData(productList);
    const index = tempProducts.findIndex((product) => product.id === id);
    tempProducts[index].inCart = false;
    tempProducts[index].count = 0;
    tempProducts[index].total = 0;
    tempCart = tempCart.filter((product) => product.id !== id);
    setCart([...tempCart]);
    setProductList([...tempProducts]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        productList,
        addToCart,
        cart,
        openModal,
        closeModal,
        modalDetails,
        isModalOpen,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
