Simterest.Views.PinIndexItem = Backbone.View.extend({
  template: JST["pins/pin_index_item"],
  tagName: "li",
  className: "pin",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
