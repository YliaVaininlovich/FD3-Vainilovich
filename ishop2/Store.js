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
    console.log("lickDelete: function()");
  },

  render: function () {
    return React.DOM.div(
      { className: "StoreName" },
      React.DOM.h1(null, this.props.store),
      React.createElement(Product, {
        products: this.state.productCurrent,
        btnDelete: this.state.isClicked,
      })
    );
  },
});
