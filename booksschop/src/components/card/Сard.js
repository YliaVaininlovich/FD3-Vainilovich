import "./Card.css";
import React, {useState} from 'react';
import noImage from '../../assets/img/no-image.png'
import InfoBook from "../info/Info";
import { useSelector, useDispatch } from 'react-redux'
import { removeBook } from "../../store/reducer"

const Card = (props) => {
  
  const cardList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [cardHover, setStateisHover] = useState('');
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  const changeHoverEnter = () =>{
    let newCardHover = props.card;
    setStateisHover(newCardHover);
  }
  const changeHoverLeave = () =>{
    setStateisHover("");
  }

  const BookDelete = (book) => {
    let newcardList =  cardList.filter((item) => item !== book);
    dispatch(removeBook(newcardList));
  }

    return (
      <div>
        
        <div className="container-card" >
    
          <img className={"cover" + (props.card === cardHover ? " selected" : "") }     
               onMouseEnter={changeHoverEnter} onMouseLeave={changeHoverLeave}
            src={props.card.volumeInfo.imageLinks?.smallThumbnail || noImage} alt="img-book"
            onClick={() => {
              setShow(true);
              setBookItem(props);
            }}
          />
         
          <div className="about"
          onClick={() => {
            setShow(true);
            setBookItem(props);
            }}
          >  
            <p className="title-book">{props.card.volumeInfo.title}</p>
            <p className="authors">{props.card.volumeInfo.authors}</p>
            <p className="link-language">Language:  {props.card.volumeInfo.language}</p>
           
            </div>
     
         <button className="button-delete"  onClick={() =>BookDelete(props.card)}>Удалить</button>
        </div>

        <InfoBook show={show} bookItem={bookItem} onClose={()=>setShow(false)}/>
    </div>
    );
  }
  
  export default Card;
