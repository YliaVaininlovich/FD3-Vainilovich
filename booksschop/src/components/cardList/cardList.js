import Card from '../card/Сard';
import { useEffect, useState } from 'react';
import "./cardList.css"
import axios from 'axios';

const keyAPI = "AIzaSyDHRWcrowRaXLSNt9IuOBP6TYw9LlHRgVQ";

 const CardList = (props) => {

  const [cardList, setCardList] = useState([]);
  const [category, setcategory] = useState("");
  const [sort, setSort] = useState("relevance");

   useEffect(() => {
     getData();
   }, []);
   
   useEffect(() => {
     getData();
  },[props.moreLoad]);
 
  useEffect(() => {
    setSort(props.sort);
    getDataSort();
  }, [props.sort]);
   
  const getData = async () => {
    const apiURL = `https://www.googleapis.com/books/v1/volumes?` +
      `q=java` +
      `&orderBy=${sort}` +
    `&maxResults=30&`+
      `&key=${keyAPI}`;
      axios
      .get(apiURL)
      .then(res => 
      {
        console.log(res.data.items);
          setCardList ([...cardList, ...res.data.items]); 
        }        
      );   
   }

   const getDataSort = async () => {
    const apiURL = `https://www.googleapis.com/books/v1/volumes?` +
      `q=java&` +
      `&orderBy=${sort}` +
    `&maxResults=30&`+
    `&key=${keyAPI}`;
      axios
      .get(apiURL)
      .then(res => 
        {
          setCardList (res.data.items); 
        }        
      );   
   }
   
        if (!cardList || cardList.length === 0) return <p>Нет данных.</p>

    return (
       
      <div >
        <h2 className="found-result">Found &nbsp;
          <span>{cardList.length}</span>
          &nbsp; results</h2>
        <div className="card-list">
             {cardList.map((item, keyID=1) => (
                    <Card key={keyID++} card={item} />
              ))
             }
       </div>
     
      </div>
    
       );
    }
    
    export default CardList;