import "./Info.css"
import noImage from '../../assets/img/no-image.png'

const InfoBook = ({show, bookItem, onClose}) => {
    return (
      <>
            {(show) ? (
                <div className="container">
                    <button className="close-modal" onClick={onClose}>Close</button>
                    <div className="info-cover">
                        <img className="img-cover" src={bookItem.card.volumeInfo.imageLinks?.smallThumbnail || noImage} alt="img-book"/>
                    </div>
                    <div className="info-details">
              <p className="info-category">Category:  {bookItem.card.volumeInfo.categories}</p>
                        <p className="info-title">Title: {bookItem.card.volumeInfo.title}</p>
              <p className="info-authors">Authors: {bookItem.card.volumeInfo.authors}</p>
              <p className="info-description">Description</p>
                        <p className="description"> {bookItem.card.volumeInfo.description}</p>
                       
                    </div>
                </div>
            ) : null

            }

        </>

    );
}

export default InfoBook;
  