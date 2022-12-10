import "./Card.css";
import React from 'react';
import noImage from '../../assets/img/no-image.png'

const Card = (props) => {
  
    return (
      <div>
        
        <div className="container-card">
         <img className="cover" src={props.card.volumeInfo.imageLinks?.smallThumbnail || noImage}  alt="img-book"/>
         <br></br>
         <div className="about">  
            <p className="title-book">{props.card.volumeInfo.title}</p>
            <p className="authors">{props.card.volumeInfo.authors}</p>
            <p className="link-language">Язык:  {props.card.volumeInfo.language}</p>
         </div>
        </div>
    </div>
    );
  }
  
  export default Card;