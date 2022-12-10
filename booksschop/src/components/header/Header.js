import "./Header.css"
import React from 'react';

const Header = (props) => {

  const categoryList = ['all', 'art', 'biography', 'computers','history', 'medical', 'poetry'];
  const onTriggerCategory = (category) => {
    return props.cbCategory(category);
  };
   
   
   const onTriggerSort = (sort) => {
    return props.cbSort(sort);
  };
   
    return (
     <header className="header">
      
      <p className="title">Search for books</p>
      <form action="" method="get">
         <input className="input-search" placeholder="js" type="search"/>
         <button className="button-search" type="submit">Поиск</button>
      </form>
      <div className="category-sort"> 
        <div className="category" onChange={(event) => {onTriggerCategory(event.target.value)}}>
          <label className="title-label">Category&nbsp;&nbsp;</label>
          <select className="select">
              {categoryList.map ((item, key=1) => (
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
  