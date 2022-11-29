import React from "react";

const withRainbowFrame = (colors) => (Fragment) => ({ ...props }) => {
    
    const frame = (acc, color) => {
        return (
            <div style={{ border: "solid 5px " + color, padding: "5px" }}>
                {acc}
            </div>
        )
    }

    const rainbowFrame = colors.reduce(frame, <Fragment {...props}/>);
    

    return (
        <div  style={{ width: 600, textAlign: 'center' }}>

            {rainbowFrame}
       
        </div>
       
        
        )
    
}

export default withRainbowFrame;