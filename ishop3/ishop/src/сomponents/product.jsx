import "./product.css";

const Product = (props) => {

  const handleProductDelete = (element) => {
    const conf = window.confirm(`Are you sure?`);
    if (conf) props.cbProductDelete(element);
  };

  const onProductSelect = (product) => {
    props.cbProductSelected(product);
  };

  const handleProductEdit = (product) => {
     props.cbProductEdit(product);
  };

  return (
    <div
      className={
        "ProductCard" +
        (props.description === props.selectedProduct ? " Selected" : "") +
        (props.description === props.editProduct  ? " Selected" : "")
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
        Артикул: {props.description.serialNumber}{" "}
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
        className="BtnProduct" id="BtnProduct"
        onClick={() => handleProductDelete(props.description)} disabled={props.isDisabled}
      >
        Удалить
      </button>
      <button className="BtnProduct" id="BtnProduct"
        onClick={() => handleProductEdit(props.description)} disabled={props.isDisabled}>
        Редактировать
      </button>
    </div>
  );
};

export default Product;
