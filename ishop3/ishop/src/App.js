import React from "react";
import "./App.css";
import Store from "./сomponents/store";

function App() {
  var nameStore = "Салон цветов";
  var productsArr = require("./products.json");

  return (
    <div className="App">
      <Store nameStore={nameStore} productList={productsArr} />
    </div>
  );
}

export default App;
