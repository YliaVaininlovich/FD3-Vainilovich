const Product = React.createClass({
  displayName: "Product",
  render: function () {
    return React.DOM.div(
      { className: "ProductFrame" },
      React.DOM.h1(null, "Всем привет!!!"),
      React.DOM.div({ className: "MyComponentText" }, "wertysdcfvxcvb")
    );
  },
});
