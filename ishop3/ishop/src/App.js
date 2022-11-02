import React from "react";
import "./App.css";
import Store from "./сomponents/store";

function App() {
  var nameStore = "Салон цветов";
  var productsArr = [
    {
      serialNumber: 1,
      name: "Замиокулькас",
      price: 40,
      photo: "./photo/zamioculcas.jpg",
      quantity: 4,
    },
    {
      serialNumber: 2,
      name: "Монстера",
      price: 20,
      photo: "./photo/monstera.jpg",
      quantity: 1,
    },
    {
      serialNumber: 3,
      name: "Спацифиллум",
      price: 70,
      photo: "./photo/spathiphyllum.jpg",
      quantity: 3,
    },
    {
      serialNumber: 4,
      name: "Драцена",
      price: 120,
      photo: "./photo/dratsena.jpg",
      quantity: 7,
    },
  ];

  return (
    <div className="App">
      <Store nameStore={nameStore} productList={productsArr} />
    </div>
  );
}

export default App;
