const Product = React.createClass({
  displayName: "Product",

  propTypes: {
    store: React.PropTypes.string.idRequied,
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

    this.props.products.forEach(function (element) {
      var productCode = React.DOM.div(
        {
          key: element.key,
          className: "ProductDescription",
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
        )
      );
      productCard.push(productCode);
    });

    return React.DOM.div(
      { className: "StoreName" },
      React.DOM.h1(null, this.props.store),
      React.DOM.div({ className: "ProductContainer" }, productCard)
    );
  },
});
