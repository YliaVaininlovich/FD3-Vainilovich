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

  render: function () {
    var productCard = [];
    console.log(this.props.products);
    this.props.products.forEach(function (element) {
      var productCode = React.DOM.div(
        {
          key: element.serialNumber,
          className: "ProductCard",
        },
        React.DOM.img({
          className: "ProductDescriptionPhoto",
          src: element.photo,
        }),
        React.DOM.div(
          { className: "ProductDescriptionName" },
          "Наименование:  " + element.name
        ),
        React.DOM.div(
          { className: "ProductDescription" },
          "Цена:   " + element.price
        ),
        React.DOM.div(
          { className: "ProductDescription" },
          "Остаток на складе:  " + element.quantity
        ),
        React.DOM.button(
          {
            className: "BtnDelete",
            value: element.serialNumber,
            onClick: this.handleClick,
          },
          "Удалить"
        )
      );
      productCard.push(productCode);
    });

    return React.DOM.div(
      { className: "ProductContainer" },
      React.DOM.div({ className: "ProductContainer" }, productCard)
    );
  },
});
