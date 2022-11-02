import React from "react";
import { useState } from "react";
import "./store.css";
import Product from "./product";

const Store = (props) => {
  const [productList, setList] = useState(props.productList);

  const cbProductDelete = (id) => {
    console.log("cbProductDelete  " + id);
    setList((prevState) =>
      prevState.filter((prevState) => prevState.serialNumber !== id)
    );
  };

  return (
    <div className="StoreName">
      <h1>{props.nameStore}</h1>
      <div className="ProductContainer">
        {productList.map((element) => (
          <Product
            key={element.serialNumber}
            description={element}
            cbProductDelete={cbProductDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
