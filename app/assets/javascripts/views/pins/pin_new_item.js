Simterest.Views.PinNewItem = Backbone.View.extend({
  template: JST["pins/pin_new_item"],
  className: "new-pin pin",
  tagName: "li",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
