import Header from './components/header/Header'
import CardList from './components/cardList/cardList'
import Footer from './components/footer/Footer';
import  { Route, Routes } from "react-router-dom";
import InfoBook from './components/info/Info'
import './App.css';
import { useState } from 'react';

const App=() => {
  
  const [moreLoad, setMoreLoad] = useState(0);
  const [language, setLanguage] = useState('all');
  const [sort, setSort] = useState('relevance');
  const [search, setSearch] = useState('js');

  const cbMoreLoad = () => {
    let count = moreLoad + 1;
    setMoreLoad(count);
 }

 const cbSort = (newSort) => {
  setSort(newSort);
 }
  
 const cbLanguage = (newLanguage) => {
  setLanguage(newLanguage);
 }
  
 const cbSearch = (newSearch) => {
   setSearch(newSearch);
   console.log(search);
 }
  
  return (
    
    <div className="app">
      <Header cbSort={cbSort} cbLanguage={cbLanguage} cbSearch={cbSearch} />
      <Routes>
        <Route path="/" element={<CardList moreLoad={moreLoad} sort={sort} language={language} search={search} />}>
        </Route>
        <Route path="/info" element={<InfoBook/>}>
        </Route>
      </Routes>
      <Footer cbMoreLoad={cbMoreLoad} />
    </div>
  );
}

export default App;
