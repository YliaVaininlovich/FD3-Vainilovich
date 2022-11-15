import "./card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <img
        className="CardPhoto"
        src={props.description.photo}
        alt="photo"
      ></img>
      <div className="CardName">Наименование: {props.description.name}</div>
      <div className="CardDescription">Артикул: {props.description.serialNumber}</div>
      <div className="CardDescription">Цена: {props.description.price} </div>
      <div className="CardDescription">
        Остаток на складе: {props.description.quantity}
      </div>
    </div>
  );
};

export default Card;
