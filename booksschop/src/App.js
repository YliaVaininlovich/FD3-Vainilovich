import Header from './components/header/Header'
import CardList from './components/cardList/cardList'
import Footer from './components/footer/Footer';
import  { Route, Routes} from "react-router-dom";
import InfoBook from './components/info/Info'
import './App.css';
import { useState } from 'react';

const App=() => {
  
  
  return ( 
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<CardList />}>
        </Route>
        <Route path="/info" element={<InfoBook/>}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
