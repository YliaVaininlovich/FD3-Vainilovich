import "./Info.css"
import image from "../../assets/img/Node-js-Notes-for-Professionals.png"

const InfoBook = () => {

    return (
      <div className="container">
       <div className="info-cover">
            <img className="img-cover" src={image} />
       </div>
       <div className="info-details">
        <p className="info-category">Category</p>
        <p className="info-title">Title</p>
        <div className="info-authors">
        <a  className="info-ref" href="#">Authors</a>
        </div>
        {/* <textarea className="info-description" defaultValue={'DEFAULT'} rows="5" cols="70">
              It was a dark and stormy night...
          </textarea> */}
       </div>
      </div>
    );
  }
  
  export default InfoBook;
  