import React from "react";
import { useState } from "react";
import "./newProduct.css"


const NewProduct = (props) => {
    
   const [newItemName, setNewItemName] = useState("");
   const [newItemPrice, setnewItemPrice] = useState(0);
   const [newItemPhoto, setnewItemPhoto] = useState("");
   const [newItemQuantity, setnewItemQuantity] = useState("");

      
    const handleInputName = (event) => {
       
        setNewItemName(event.target.value);
    };
    
    const handleInputPrice = (event) => {
        setnewItemPrice(event.target.value);
    };
    const handleInputQuantity = (event) => {
        setnewItemPhoto(event.target.value);
    };
    const handleInputPhoto = (event) => {
        setnewItemQuantity(event.target.value);
    };

    const addNewProduct = (newItem) => {
        newItem = {
            "name": newItemName,
            "price": newItemPrice,
            "photo": newItemPhoto,
            "quantity":newItemQuantity  
        };
        console.log(newItem);
        props.addNewProduct(newItem);
    }

    const cancelNewProduct = () => {
        props.cancelNewProduct();
    }

    return (
        <div className="newContainer">
            <h2>Новый продукт</h2>
            <input type="text" className="labelProduct" onChange={handleInputName} placeholder="Введите название" required/>
            <input type="text" className="labelProduct" onChange={handleInputPrice} placeholder="Введите цену" required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputQuantity} placeholder="Введите остаток на складе" required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputPhoto} placeholder="Введите ссылку на фото" required />
            <button className="BtnNew BtnNewCard" onClick={addNewProduct}>OK</button>
            <button className="BtnNew BtnNewCard" onClick={cancelNewProduct}>Cancel</button>
        </div>
    )
}

export default NewProduct;