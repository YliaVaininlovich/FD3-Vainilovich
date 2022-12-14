import "./Header.css"
import { useDispatch } from 'react-redux'
import { searhChange } from "../../store/reducer"
import { sortChange } from "../../store/reducer"
import React, { useRef} from 'react';

const Header = () => {

  
  const search = useRef(null);
  const dispatch = useDispatch();
   
  const onTriggerSearch = () => {
    dispatch(searhChange(search.current.value));
  };

   const onTriggerSort = (sort) => {
    dispatch(sortChange(sort))
  };
   
    return (
     <header className="header">
      <div className='search'>
      <p className="title">Search for books</p>
          <input className="input-search" placeholder="js" ref={search} />
         <button className="button-search" type="submit" onClick={onTriggerSearch}>Поиск</button>
      </div>
      
       
        <div className="sort" onChange={(event) => onTriggerSort(event.target.value)}>
        <select className="select">
            <option>relevance</option>
            <option>newest</option>
          </select>
          <label className="title-label">Sorting By</label>
        </div>
     
      
     </header>
    );
  }
  
  export default Header;
  