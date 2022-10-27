const Store = React.createClass({
  displayName: "Store",

  propTypes: {
    store: React.PropTypes.string.isRequired,
  },

  render: function () {
    return React.DOM.div(
      { className: "StoreName" },
      React.DOM.h1(null, this.props.store),
      React.DOM.CreateElement(Product, { products: this.props.products })
    );
  },
});
