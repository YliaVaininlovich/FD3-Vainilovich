import "./product.css";

const Product = (props) => {
  const handleProductDelete = (serialNumber) => {
    const conf = window.confirm(`Are you sure?`);
    if (conf) props.cbProductDelete(serialNumber);
  };

  const handleHighlight = (id) => {
    console.log(id);
  };

  return (
    <div
      className="ProductCard"
      onClick={() => handleHighlight(props.description.serialNumber)}
    >
      <img
        className="ProductDescriptionPhoto"
        src={props.description.photo}
      ></img>
      <div className="ProductDescriptionName">
        Наименование: {props.description.name}
      </div>
      <div className="ProductDescription">Цена: {props.description.price} </div>
      <div className="ProductDescription">
        Остаток на складе: {props.description.quantity}
      </div>
      <button
        className="BtnDelete"
        onClick={() => handleProductDelete(props.description.serialNumber)}
      >
        Удалить
      </button>
    </div>
  );
};

export default Product;
