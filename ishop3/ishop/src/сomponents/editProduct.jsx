import React from "react";
import { useState } from "react";
import "./editProduct.css"


const EditProduct = (props) => {
    
   const [newItemName, setNewItemName] = useState("");
   const [newItemPrice, setnewItemPrice] = useState(0);
   const [newItemPhoto, setnewItemPhoto] = useState("");
    const [newItemQuantity, setnewItemQuantity] = useState("");
    const [nameValid, setNameValid] = useState(false);
    const [priceValid, setPriceValid] = useState(false);
    const [quantityValid, setQuantityValid] = useState(false);
    const [photoValid, setPhotoValid] = useState(false);
      
    const isValid = nameValid && priceValid && quantityValid && photoValid;

    const handleInputName = (event) => {
        setNameValid(event.target.checkValidity());
        setNewItemName(event.target.value);
    };
    
    const handleInputPrice = (event) => {
        setPriceValid(event.target.checkValidity());
        setnewItemPrice(event.target.value);
    };

    const handleInputQuantity = (event) => {
        setQuantityValid(event.target.checkValidity());
        setnewItemQuantity(event.target.value);
    };

    const handleInputPhoto = (event) => {
        setPhotoValid(event.target.checkValidity());
        setnewItemPhoto(event.target.value);
    };

    const saveChangeProduct = () => {
        let newItem = {
            "name": newItemName,
            "price": Number(newItemPrice),
            "photo": newItemPhoto,
            "quantity":Number(newItemQuantity)  
        };
        props.addNewProduct(newItem);
    }

    const cancelNewProduct = () => {
        props.cancelNewProduct();
    }

    return (
        <div className="newContainer">
            <h2>Новый продукт</h2>
            <input type="text" className="labelProduct" name="namePr" onChange={handleInputName} placeholder="Введите название" required/>
            <input type="text" className="labelProduct" onChange={handleInputPrice} placeholder="Введите цену" required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputQuantity} placeholder="Введите остаток на складе" required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputPhoto} placeholder="Введите ссылку на фото" required />
            <button className="BtnNew BtnNewCard" id="ok" onClick={saveChangeProduct} disabled={!isValid}>OK</button>
            <button className="BtnNew BtnNewCard" onClick={cancelNewProduct}>Cancel</button>
        </div>
    )
}

export default EditProduct;