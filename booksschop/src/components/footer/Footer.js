import "./Footer.css"
import React from 'react';

const Footer = (props) => {
   
    const onTrigger = () => {
        return props.cbMoreLoad();
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
  