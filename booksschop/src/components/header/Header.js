import "./Header.css"
import React, { useState} from 'react';

const Header = (props) => {

  const languageList = ['all', 'en', 'ru', 'id', 'fi'];

  const [input, setInput] = useState("");

  const onTriggerLanguage = (language) => {
    return props.cbLanguage(language);
  };
   
   const onTriggerSort = (sort) => {
    return props.cbSort(sort);
  };
   
    return (
     <header className="header">
      <div className='search'>
      <p className="title">Search for books</p>
          <input className="input-search" placeholder="js"
            value={input} onChange={(event) => { setInput(event.target.value) }} />
         <button className="button-search" type="submit" onClick={()=>props.cbSearch(input)}>Поиск</button>
      </div>
      <div className="language-sort"> 
        <div className="language" onChange={(event) => {onTriggerLanguage(event.target.value)}}>
          <label className="title-label">&nbsp;Language&nbsp;</label>
          <select className="select">
              {languageList.map ((item, key=1) => (
                <option key={key}>{item}</option>
              ))}
          </select>
        </div>
        <div className="sort"  onChange={(event) => onTriggerSort(event.target.value)}>
          <label className="title-label">Sorting By</label>
          <select className="select">
            <option>relevance</option>
            <option>newest</option>
          </select>
        </div>
      </div>
      
     </header>
    );
  }
  
  export default Header;
  