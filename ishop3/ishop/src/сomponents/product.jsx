import "./product.css";

const Product = (props) => {
  const handleProductDelete = (serialNumber) => {
    const conf = window.confirm(`Are you sure?`);
    if (conf) props.cbProductDelete(serialNumber);
  };

  const onProductSelect = (product) => {
    // console.log(product);
    props.cbProductSelected(product);
  };

  return (
    <div
      className={
        "ProductCard" +
        (props.description === props.selectedProduct ? " Selected" : "")
      }
    >
      <img
        className="ProductDescriptionPhoto"
        src={props.description.photo}
        alt="photo"
        onClick={() => onProductSelect(props.description)}
      ></img>
      <div
        className="ProductDescriptionName"
        onClick={() => onProductSelect(props.description)}
      >
        Наименование: {props.description.name}
      </div>
      <div
        className="ProductDescription"
        onClick={() => onProductSelect(props.description)}
      >
        Цена: {props.description.price}{" "}
      </div>
      <div
        className="ProductDescription"
        onClick={() => onProductSelect(props.description)}
      >
        Остаток на складе: {props.description.quantity}
      </div>
      <button
        className="BtnProduct"
        onClick={() => handleProductDelete(props.description.serialNumber)}
      >
        Удалить
      </button>
      <button className="BtnProduct">Редактировать</button>
    </div>
  );
};

export default Product;
