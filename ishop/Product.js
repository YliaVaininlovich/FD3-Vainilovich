const Product = React.createClass({
  displayName: "Product",
  render: function () {
    var productCard = [];

    for (let i = 0; i < this.props.products.length; i++) {
      var element = this.props.products[i];
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
          { className: "ProductDescription" },
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
    }

    return React.DOM.div(
      { className: "StoreName" },
      React.DOM.h1(null, this.props.store),
      React.DOM.div({ className: "ProductContainer" }, productCard)
    );
  },
});
