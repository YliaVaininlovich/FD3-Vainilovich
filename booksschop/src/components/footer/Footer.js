import "./Footer.css"
import React from 'react';
import axios from 'axios';
import { keyAPI} from "../cardList/cardList"
import { useSelector, useDispatch } from 'react-redux'
import { updateBooksList } from "../../store/reducer"

const Footer = (props) => {
   
    const search = useSelector((state) => state.search);
    const sort = useSelector((state) => state.sort);
    const dispatch = useDispatch();
    
    const onTrigger = () => {
        getData();
      };
        
      const getData = async () => {
        const apiURL = `https://www.googleapis.com/books/v1/volumes?` +
          `q=${search}` +
          `&orderBy=${sort}` +
          `&maxResults=30&`+
          `&key=${keyAPI}`;
        axios
          .get(apiURL)
          .then(res => {
              dispatch(updateBooksList(res.data.items));
          }  
        ); 
    }
    
    return (
        <footer className="footer">
            <button className="load-more" onClick={onTrigger}>
                Load more
            </button>
        </footer>
   
    );
  }
  
  export default Footer;
  