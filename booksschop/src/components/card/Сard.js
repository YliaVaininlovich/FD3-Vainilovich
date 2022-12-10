import "./Card.css";
import React from 'react';


const Card = (props) => {
  
    return (
      <div>
        
        <div className="container-card">
         <img className="cover" src={props.card.volumeInfo.imageLinks.smallThumbnail}  alt="img-book"/>
         <br></br>
         <div className="about">
           <a className="link-category" href="/info">{props.category}</a>
            <p className="title-book">{props.card.volumeInfo.title}</p>
             <p className="authors">{props.card.volumeInfo.authors}</p>
         </div>
        </div>
    </div>
    );
  }
  
  export default Card;