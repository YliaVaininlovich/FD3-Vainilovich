import Header from './components/header/Header'
import CardList from './components/cardList/cardList'
import Footer from './components/footer/Footer';
import  { Route, Routes } from "react-router-dom";
import InfoBook from './components/info/Info'
import './App.css';
import { useState } from 'react';

const App=() => {
  
  const [moreLoad, setMoreLoad] = useState(0);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');

  const cbMoreLoad = () => {
    let count = moreLoad + 1;
    setMoreLoad(count);
 }

 const cbSort = (newSort) => {
  setSort(newSort);
 }
  
 const cbCategory = (newCategory) => {
  setCategory(newCategory);
 }
  
  return (
    
    <div className="app">
      <Header cbSort={cbSort} cbCategory={cbCategory} />
      <Routes>
        <Route path="/" element={<CardList moreLoad={moreLoad} sort={sort} category={category} />}>
        </Route>
        <Route path="/info" element={<InfoBook/>}>
        </Route>
      </Routes>
      <Footer cbMoreLoad={cbMoreLoad} />
    </div>
  );
}

export default App;
