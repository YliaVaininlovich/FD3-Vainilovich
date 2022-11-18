import React from "react"
const BR2JSX = (props) => {
    
   
    const textArray = props.text.split(/<br\s?\/?>/g);
   
    let text = "";
    text =  textArray.map((fragment, id) => {
        return (
            <React.Fragment key={id}>
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