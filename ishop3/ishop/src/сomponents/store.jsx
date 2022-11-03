import React from "react";
import { useState } from "react";
import "./store.css";
import Product from "./product";
import Card from "./card";

const Store = (props) => {
  const [productList, setList] = useState(props.productList);
  const [selectedProduct, setSelectedProduct] = useState(-1);

  const cbProductDelete = (id) => {
    setList((prevState) =>
      prevState.filter((prevState) => prevState.serialNumber !== id)
    );
  };

  const cbProductSelected = (product) => {
    setSelectedProduct(product);
  };

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
      {selectedProduct !== -1 ? <Card description={selectedProduct} /> : ""}
    </>
  );
};

export default Store;
