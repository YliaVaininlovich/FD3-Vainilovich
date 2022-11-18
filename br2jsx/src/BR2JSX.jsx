
const BR2JSX = (props) => {
    
   
    const textArray = props.text.split(/<br\s?\/?>/g);
   
    let text = "";
    text =  textArray.map((fragment) => {
        return (
            <div style={{ background: "green", width: "200px" }}> {fragment} </div>
        );
        
    })

    return (
        <>
            {text}
        </>
    )
}

export default BR2JSX;