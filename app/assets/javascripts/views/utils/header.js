Simterest.Views.Header = Backbone.CompositeView.extend({
  template: JST["utils/header"],
  tagName: "nav",
  className: "header",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  },
})
