import React from "react";
import { useState } from "react";
import "./editProduct.css"


const EditProduct = (props) => {
    
   const [newItemName, setNewItemName] = useState(props.editProduct.name);
   const [newItemPrice, setnewItemPrice] = useState(props.editProduct.price);
   const [newItemPhoto, setnewItemPhoto] = useState(props.editProduct.photo);
    const [newItemQuantity, setnewItemQuantity] = useState(props.editProduct.quantity);
    const [nameValid, setNameValid] = useState(true);
    const [priceValid, setPriceValid] = useState(true);
    const [quantityValid, setQuantityValid] = useState(true);
    const [photoValid, setPhotoValid] = useState(true);
      
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
            "serialNumber": props.editProduct.serialNumber,
            "name": newItemName,
            "price": Number(newItemPrice),
            "photo": newItemPhoto,
            "quantity":Number(newItemQuantity)  
        };
        props.okEditProduct(newItem);
    }

    const cancelEditProduct = () => {
        props.cancelEditProduct();
    }

    return (
        <div className="newContainer">
            <h2>Изменить продукт</h2>
            <input type="text" className="labelProduct" onChange={handleInputName} value={newItemName} required/>
            <input type="text" className="labelProduct" onChange={handleInputPrice} value={newItemPrice} required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputQuantity} value={newItemQuantity} required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputPhoto} value={newItemPhoto} required />
            <button className="BtnNew BtnNewCard" id="ok" onClick={saveChangeProduct} disabled={!isValid}>OK</button>
            <button className="BtnNew BtnNewCard" onClick={cancelEditProduct}>Cancel</button>
        </div>
    )
}

export default EditProduct;