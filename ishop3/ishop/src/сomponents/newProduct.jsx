import React from "react";
import { useState } from "react";
import "./newProduct.css"


const NewProduct = (props) => {
    
    const [newItemSerialNumber, setNewItemSerialNumber] = useState(0);
   const [newItemName, setNewItemName] = useState("");
   const [newItemPrice, setnewItemPrice] = useState(0);
   const [newItemPhoto, setnewItemPhoto] = useState("");
    const [newItemQuantity, setnewItemQuantity] = useState("");
    const [SerialNumberValid, setSerialNumberValid] = useState(true);
    const [nameValid, setNameValid] = useState(false);
    const [priceValid, setPriceValid] = useState(false);
    const [quantityValid, setQuantityValid] = useState(false);
    const [photoValid, setPhotoValid] = useState(false);
      
    const isValid = SerialNumberValid && nameValid && priceValid && quantityValid && photoValid;

    const handleInputSerialNumber = (event) => {
        setSerialNumberValid(event.target.checkValidity());
        setNewItemSerialNumber(event.target.value);
        
    };

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

    const addNewProduct = () => {
        let newItem = {
            "serialNumber":Number(newItemSerialNumber),
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
            <input type="text" className="labelProduct" onChange={handleInputSerialNumber} placeholder="Артикул" required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputName} placeholder="Введите название" required/>
            <input type="text" className="labelProduct" onChange={handleInputPrice} placeholder="Введите цену" required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputQuantity} placeholder="Введите остаток на складе" required pattern="[0-9]+"/>
            <input type="text" className="labelProduct" onChange={handleInputPhoto} placeholder="Введите ссылку на фото" required />
            <button className="BtnNew BtnNewCard" id="ok" onClick={addNewProduct} disabled={!isValid}>OK</button>
            <button className="BtnNew BtnNewCard" onClick={cancelNewProduct}>Cancel</button>
        </div>
    )
}

export default NewProduct;