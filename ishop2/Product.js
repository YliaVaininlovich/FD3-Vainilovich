const Product = React.createClass({
  displayName: "Product",

  propTypes: {
    productCard: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        photo: React.PropTypes.string.idRequied,
        name: React.PropTypes.string.idRequied,
        price: React.PropTypes.number.idRequied,
        quantity: React.PropTypes.number.idRequied,
      })
    ),
  },

  btnClick: function (e) {
    console.log(e.target.getAttribute("value"));
  },

  render: function () {
    return React.DOM.div(
      {
        className: "ProductContainer",
        key: this.props.products.serialNumber,
        className: "ProductCard",
      },
      React.DOM.img({
        className: "ProductDescriptionPhoto",
        src: this.props.products.photo,
      }),
      React.DOM.div(
        { className: "ProductDescriptionName" },
        "Наименование:  " + this.props.products.name
      ),
      React.DOM.div(
        { className: "ProductDescription" },
        "Цена:   " + this.props.products.price
      ),
      React.DOM.div(
        { className: "ProductDescription" },
        "Остаток на складе:  " + this.props.products.quantity
      ),
      React.DOM.button(
        {
          className: "BtnDelete",
          value: this.props.products.serialNumber,
          onClick: this.btnClick,
        },
        "Удалить"
      )
    );
  },
});
