Simterest.Views.PinIndex = Backbone.CompositeView.extend({
  template: JST["pins/pin_index"],
  className: "pins",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    this.addPins();
    this.addNewPin();
    return this;
  },

  addPins: function () {
    this.collection.each(function(pin) {
      var view = new Simterest.Views.PinIndexItem({
        model: pin
      });
      this.addSubview("SELECTOR", view, true)
    }.bind(this))
  },

  addNewPin: function () {
    var view = new Simterest.Views.PinNewItem()
    this.addSubview("SELECTOR", view, true);
  }
})
