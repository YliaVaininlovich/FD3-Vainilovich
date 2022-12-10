import Card from '../card/Сard';
import { useEffect, useState } from 'react';
import "./cardList.css"
import axios from 'axios';

const keyAPI = "AIzaSyBrD2-_UsjIf7FrFvZO9CR3RAV07zrJFCw";

 const CardList = (props) => {

  const [cardList, setCardList] = useState([]);
  
   useEffect(() => {
     getData();
   }, []);
   
   useEffect(() => {
     getData();
  },[props.moreLoad]);
 
   useEffect(() => {
    getData(2);
  }, [props.sort, props.language, props.search]);
   
     
  const getData = async (param=1) => {
    const apiURL = `https://www.googleapis.com/books/v1/volumes?` +
      `q=${props.search}` +
      `&orderBy=${props.sort}` +
      `&maxResults=30&`+
      `&key=${keyAPI}`;
    axios
      .get(apiURL)
      .then(res => {
        if (param === 1)
          setCardList([...cardList, ...res.data.items]);
        else
          setCardList(res.data.items);
      }  
    ); 
     if (props.language !== 'all' && cardList.length !== 0) {
        FilterLanguage();
     }
   }
   
   const FilterLanguage = () => {
   
     let cardListFilter = [];
     
     for (let i = 0; i< cardList.length; i++)
     {
       if (cardList[i].volumeInfo.hasOwnProperty('language') !== 'undefined' &&
         cardList[i].volumeInfo.language === props.language)
         cardListFilter.push(cardList[i]);
       }

    //  cardListFilter.filter(item => (item.volumeInfo.hasOwnProperty('language') !== false) &&
    //    (item.card.volumeInfo.language === props.language)
    //  );
    
    setCardList(cardListFilter);
   };
   
  
    return (
       
      <div >
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
     
      </div>
    
       );
    }
    
    export default CardList;