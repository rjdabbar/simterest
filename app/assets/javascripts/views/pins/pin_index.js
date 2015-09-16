Simterest.Views.PinIndex = Backbone.CompositeView.extend({
  template: JST["pins/pin_index"],
  className: "pins",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    this.addPins();
    return this;
  },

  addPins: function () {
    // add all the pins
  }
})
