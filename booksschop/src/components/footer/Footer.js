import "./Footer.css"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateBooksList } from "../../store/reducer"
import { keyAPI } from "../../getData";
import axios from 'axios';

const Footer = () => {
   
    const search = useSelector((state) => state.search);
    const sort = useSelector((state) => state.sort);
    const dispatch = useDispatch();
    
    const getData = async () => {
      const apiURL = `https://www.googleapis.com/books/v1/volumes?` +
        `q="${search}"` +
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
  
    const onTrigger = () => {
      getData();
      };
        
    return (
        <footer className="footer">
            <button className="load-more" onClick={onTrigger}>
                Load more
            </button>
        </footer>
   
    );
  }
  
  export default Footer;
  