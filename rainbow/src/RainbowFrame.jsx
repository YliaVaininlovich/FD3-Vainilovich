import React from "react";

const RainbowFrame = (props) => {
    
    let rainbow = 'Hello!!!';
    
    
        props.colors.map((color) => (
                rainbow = 
                    <div style={{ border: "15px solid "+color , width: "900px", height: "70px", padding: "20px", verticalAlign: "middle", display: "table-cell" }} >
                        {rainbow}
                    </div>
            ))
    

    return (
        <>
            {rainbow}
        </>
        
        )
    
}

export default RainbowFrame;