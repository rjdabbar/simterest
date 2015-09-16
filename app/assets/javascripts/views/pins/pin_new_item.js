Simterest.Views.PinNewItem = Backbone.View.extend({
  template: JST["pins/pin_new_item"],
  tagName: "li",
  className: "new-pin pin",

  events: {},

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
