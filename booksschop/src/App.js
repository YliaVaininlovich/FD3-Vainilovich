import React from "react";

import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/about/about";
import Error from "./components/error/error";
import BooksSchop from "./components/booksShop/booksShop";

function App() {
  return (
    <>
      <p className="nav">
      <Link className="nav-link" to="/">
          Search for books
        </Link>
        <span className="nav-link"> | </span>
        <Link className="nav-link" to="/about">
          About us
        </Link>
      </p>

      <Routes>
        <Route path="/" element={<BooksSchop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;