import React from "react";
import { useState } from "react";
import "./store.css";
import Product from "./product";
import Card from "./card";
import NewProduct from "./newProduct";

const Store = (props) => {
  const [productList, setList] = useState(props.productList);
  const [selectedProduct, setSelectedProduct] = useState(-1);
  const [addProduct, setNewProduct] = useState(-1);
  // const [newItem, setNewItem] = useState({
  //   "serialNumber": -1,
  //   "name": "",
  //   "price": 0,
  //   "photo": "",
  //   "quantity": 0
  // });
  
  const cbProductDelete = (element) => {
    setList((prevState) =>
      prevState.filter((prevState) => prevState !== element)
    );
    if (element === selectedProduct) setSelectedProduct(-1);
  };

  const cbProductSelected = (product) => {
    setSelectedProduct(product);
  };

  const clickNewProduct =() => {
     setNewProduct(1);
  }

  const cbAddNewProduct = (newItem) => {
    console.log("cbAddNewProduct"+newItem);
  }

  const cbCancelNewProduct=() => {
    setNewProduct(-1);
  }

  return (
    <>
      <div className="StoreName">
        <h1>{props.nameStore}</h1>
        <div className="ProductContainer">
          {productList.map((element) => (
            <Product
              key={element.serialNumber}
              description={element}
              cbProductDelete={cbProductDelete}
              cbProductSelected={cbProductSelected}
              selectedProduct={selectedProduct}
            />
          ))}
        </div>
      </div>
      <button className="BtnNew" onClick={clickNewProduct}>Новый</button>
      {selectedProduct !== -1 ? <Card description={selectedProduct} /> : ""}

      {addProduct === 1 ? <NewProduct addNewProduct={cbAddNewProduct} cancelNewProduct={cbCancelNewProduct} /> : ""}
    </>
  );
};

export default Store;
