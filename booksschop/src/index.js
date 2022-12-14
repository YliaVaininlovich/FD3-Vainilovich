import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BooksSchop from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { initiateStore } from "./store/initStore";

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = initiateStore();

root.render(
    <Provider store={store}>
 <BrowserRouter>
     <BooksSchop />
 </BrowserRouter>
 </Provider>
);

reportWebVitals();
