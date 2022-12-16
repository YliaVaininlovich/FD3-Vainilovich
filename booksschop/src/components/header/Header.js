import "./Header.css"
import { useSelector, useDispatch } from 'react-redux'
import { searhChange } from "../../store/reducer"
import { sortChange } from "../../store/reducer"
import React, { useRef } from 'react';

const Header = () => {

  
  const refSearch = useRef(null);

  const search = useSelector((state) => state.search);
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();
   
  const onTriggerSearch = () => {
    dispatch(searhChange(refSearch.current.value));
  };

   const onTriggerSort = (sort) => {
     dispatch(sortChange(sort))
  };
   
    return (
     <header className="header">
      <div className='search'>
      <p className="title">Search for books</p>
         <input className="input-search" placeholder={search} ref={refSearch} />
         <button className="button-search" type="submit" onClick={onTriggerSearch}>Поиск</button>
      </div>
      
       
        <div className="sort" onChange={(event) => onTriggerSort(event.target.value)}>
        <select className="select" defaultValue={sort}>
            <option>relevance</option>
            <option>newest</option>
          </select>
          <label className="title-label">Sorting By</label>
        </div>
     
      
     </header>
    );
  }
  
  export default Header;
  