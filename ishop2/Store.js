const Store = React.createClass({
  displayName: "Store",

  propTypes: {
    store: React.PropTypes.string.isRequired,
  },

  getInitialState: function () {
    return {
      productCurrent: this.props.products,
      isClicked: this.clickDelete,
    };
  },

  clickDelete: function () {
    console.log("сlickDelete: function()");
  },

  render: function () {
    return React.DOM.div(
      { className: "StoreName" },
      React.DOM.h1(null, this.props.store),
      this.state.productCurrent.forEach(function (element) {
        React.createElement(Product, {
          products: element,
        });
        console.log(element);
      })
    );
  },
});
