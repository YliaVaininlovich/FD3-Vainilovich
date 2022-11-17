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

  const isDisabled = statusButtons;
  let productKeyCurrent = 1;

  const cbProductDelete = (element) => {
    setList(productList.filter((prevState) => prevState !== element)
    );
    if (element === selectedProduct) setSelectedProduct(-1);
  };

  const cbProductSelected = (product) => {
    setSelectedProduct(product);
    console.log(productList);
  };

  const clickNewProduct =() => {
    setNewProduct(1);
    setSelectedProduct(-1);
    setStatusButtons(true);
  }

  const cbAddNewProduct = (newItem) => {
    let tempNewProduct = productList;
    tempNewProduct.push(newItem);
    setList(tempNewProduct);
    setNewProduct(-1);
    setStatusButtons(false);
    console.log(productList);
  }

  const cbCancelNewProduct=() => {
    setNewProduct(-1);
    setStatusButtons(false);
  }

  const cbProductEdit = (product) => {
    setEditProduct(product);
    setStatusEdit(1);
    console.log(editProduct);
    setSelectedProduct(-1);
  }

  const cbChangeProduct = () => {
     setStatusButtons(true);
  }
  

  const cbCancelEditProduct=() => {
    setStatusEdit(-1);
    setEditProduct(-1);
    setStatusButtons(false);
  }

  const cbEditProduct = (product) => {
    let tempNewProduct = productList;
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
              key={productKeyCurrent++}
              description={element}
              cbProductDelete={cbProductDelete}
              cbProductSelected={cbProductSelected}
              cbProductEdit={cbProductEdit}
              selectedProduct={selectedProduct}
              editProduct={editProduct}
              isDisabled={statusButtons}
            />
          ))
          }
        </div>
      </div>
      <button className="BtnNew" id="BtnNew" onClick={clickNewProduct} disabled={isDisabled}>Новый</button>
      {selectedProduct !== -1 ? <Card description={selectedProduct} /> : ""}

      {addProduct === 1 ? <NewProduct addNewProduct={cbAddNewProduct} cancelNewProduct={cbCancelNewProduct} /> : ""}
      {statusEdit === 1 ? <EditProduct editProduct={editProduct} changeProduct={cbChangeProduct}
        okEditProduct={cbEditProduct} cancelEditProduct={cbCancelEditProduct} /> : ""}
    </>
  );
};

export default Store;
