Simterest.Views.PinIndex = Backbone.CompositeView.extend({
  template: JST["pins/pin_index"],
  className: "pins",

  events: {
    "click li.new-pin": "newPinModal"
  },

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
  },

  newPinModal:function (e) {
    e.preventDefault();
    var pin = new Simterest.Models.Pin();
    var view = new Simterest.Views.PinFormSource({
      collection: this.collection,
      model: pin
    });
    this.collection.trigger("openModal", view)
  }
})
