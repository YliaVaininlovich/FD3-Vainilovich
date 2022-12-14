import Card from '../card/Сard';
import { useEffect} from 'react';
import "./cardList.css"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {initBooksList } from "../../store/reducer"

export const keyAPI = "AIzaSyBrD2-_UsjIf7FrFvZO9CR3RAV07zrJFCw";

 const CardList = (props) => {

   const cardList = useSelector((state) => state.books);
   const search = useSelector((state) => state.search);
   const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();
   

   useEffect(() => {
     getData();
   }, []);
   
   useEffect(() => {
    getData();
  }, [sort, search]);
   
   
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
     
   
    return (
       
      <>
        <h2 className="found-result">Found &nbsp;
          <span>{cardList.length}</span>
          &nbsp; results</h2>
        {(!cardList || cardList.length === 0)
          ?
          <p>Нет данных.</p>
          :  
          <div className="card-list">
            {cardList.map((item, keyID = 1) => (
              <Card key={keyID++} card={item} />
            ))
            }
          </div>   
        }
      </>
       );
    }
    
    export default CardList;