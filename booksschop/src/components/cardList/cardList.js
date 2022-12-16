import Card from '../card/Сard';
import { useEffect, useState} from 'react';
import "./cardList.css"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { initBooksList } from "../../store/reducer"
import { keyAPI } from "../../getData";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Pagination from '../pagination/pagination';

 const CardList = () => {
  const [open, setOpen] = useState(false)
   
   const cardList = useSelector((state) => state.books);
   const search = useSelector((state) => state.search);
   const sort = useSelector((state) => state.sort);
   const currentPage = useSelector((state) => state.currentPage);
   const pageSize = useSelector((state) => state.pageSize);

   const dispatch = useDispatch();
   
   useEffect(() => {
     if (cardList.length === 0) {
       getData();
     }
   }, []);
     
   useEffect(() => {
      getData();
   }, [search, sort]);
   
  const getData = async () => {
    const apiURL = `https://www.googleapis.com/books/v1/volumes?` +
      `q="${search}"` +
      `&orderBy=${sort}` +
      `&maxResults=30&`+
      `&key=${keyAPI}`;
    axios
      .get(apiURL)
      .then(res => {
        dispatch(initBooksList(res.data.items));
      }
    ); 
   }
     
   const paginate = () => {
     const startIndex = (currentPage - 1) * pageSize;
     return [...cardList].splice(startIndex, pageSize);
   }

   const viewList = paginate();

    return (
       
      <>
        <h2 className="found-result">Found &nbsp;
          <span>{cardList.length}</span>
          &nbsp; results</h2>
        {(!cardList || cardList.length === 0)
          ?
          <h1 className="found-result">Нет данных</h1>
          :  
         
          <div className="card-list">
           {/* <TransitionGroup component='div' className="card-list"> */}
            {/* если включить пагинацию следует cardList заменить на viewList для постраничного отображения */}
            {viewList.map((item, keyID = 1) => (
              //  <CSSTransition key={item.id} in={open} timeout={1000} classNames='example' unmountOnExit> 
                <Card key={keyID++} card={item} />
              // </CSSTransition>
            ))
              }
             {/* </TransitionGroup> */}
          </div>   
        
        }
        <Pagination />
      </>
       );
    }
    
    export default CardList;