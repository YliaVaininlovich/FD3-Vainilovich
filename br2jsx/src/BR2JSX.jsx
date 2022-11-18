import React from "react"
const BR2JSX = (props) => {
    
   
    const textArray = props.text.split(/<br\s?\/?>/g);
   
    let text = "";
    let id = 0;
    text =  textArray.map((fragment) => {
        return (
            <React.Fragment key={id++}>
            {id !== 0 && <br />} {fragment}
        </React.Fragment>
        );
        
    })

    return (
        <>
        {text} 
        </>
         
    )
}

export default BR2JSX;