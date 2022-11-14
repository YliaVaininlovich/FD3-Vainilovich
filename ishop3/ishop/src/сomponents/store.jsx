import React from "react";
import { useState } from "react";
import "./store.css";
import Product from "./product";
import Card from "./card";
import NewProduct from "./newProduct";
import EditProduct from "./editProduct";

const Store = (props) => {
  const [productList, setList] = useState(props.productList);
  const [selectedProduct, setSelectedProduct] = useState(-1);
  const [addProduct, setNewProduct] = useState(-1);
  const [statusEdit, setStatusEdit] = useState(-1);
  const [editProduct, setEditProduct] = useState(-1);
  const [statusButtons, setStatusButtons] = useState(false);
   
  let isDisabled = statusButtons;

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
    setSelectedProduct(-1);
    setStatusButtons(true);
  }

  const cbAddNewProduct = (newItem) => {
    newItem["serialNumber"] = newItem.price + newItem.quantity;
    console.log(newItem);
    let tempNewProduct = productList;
    tempNewProduct.push(newItem);
    setList(tempNewProduct);
    setNewProduct(-1);
    setStatusButtons(false);
  }

  const cbCancelNewProduct=() => {
    setNewProduct(-1);
    setStatusButtons(false);
  }

  const cbProductEdit=(product) => {
    setStatusEdit(1);
    setEditProduct(product);
    setSelectedProduct(-1);
    setStatusButtons(true);
  }

  const cbCancelEditProduct=() => {
    setStatusEdit(-1);
    setEditProduct(-1);
    setStatusButtons(false);
  }

  const cbEditProduct = (product) => {
    let tempNewProduct = productList;
    console.log(product);
    tempNewProduct = tempNewProduct.map(item => item.serialNumber===product.serialNumber?product:item)
    setList(tempNewProduct);
    setStatusEdit(-1);
    setEditProduct(-1);
    setStatusButtons(false);
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
              cbProductEdit={cbProductEdit}
              selectedProduct={selectedProduct}
              editProduct={editProduct}
              isDisabled={statusButtons}
            />
          ))}
        </div>
      </div>
      <button className="BtnNew" id="BtnNew" onClick={clickNewProduct} disabled={isDisabled}>Новый</button>
      {selectedProduct !== -1 ? <Card description={selectedProduct} /> : ""}

      {addProduct === 1 ? <NewProduct addNewProduct={cbAddNewProduct} cancelNewProduct={cbCancelNewProduct} /> : ""}
      {statusEdit === 1 ? <EditProduct editProduct={editProduct}  okEditProduct={cbEditProduct} cancelEditProduct={cbCancelEditProduct} /> : ""}
    </>
  );
};

export default Store;
