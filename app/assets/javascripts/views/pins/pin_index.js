Simterest.Views.PinIndex = Backbone.CompositeView.extend({
  template: JST["pins/pin_index"],
  className: "pins",

  initialize: function () {
    this.listenTo(this.collection, "sync add remove", this.render)
  },

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
      this.addSubview("ul.pin-index", view, true)
    }.bind(this))
  },

  addNewPin: function () {
    var view = new Simterest.Views.PinNewItem()
    this.addSubview("ul.pin-index", view, true);
  }
})
