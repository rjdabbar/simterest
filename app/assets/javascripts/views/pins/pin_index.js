Simterest.Views.PinIndex = Backbone.CompositeView.extend({
  template: JST["pins/pin_index"],
  className: "pins",

  events: {
    "click li.new-pin": "newPinModal",
    "click button.pin-it": "pinForm",
    "click button.edit-pin": "editPin"
  },

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.collection, "sync add remove", this.render);
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
        collection: this.collection,
        model: pin
      });
      this.addSubview("ul.pin-index", view, true)
    }.bind(this))
  },

  addNewPin: function () {
    if (Simterest.currentUser.id === this.user.id) {
      var view = new Simterest.Views.PinNewItem();
      this.addSubview("ul.pin-index", view, true);
    }
  },

  newPinModal:function (e) {
    e.preventDefault();
    var pin = new Simterest.Models.Pin();
    var view = new Simterest.Views.PinFormSource({
      collection: this.collection,
      model: pin
    });
    this.collection.trigger("openModal", view)
  },

  pinForm: function (e) {
    e.preventDefault();
    var pin = this.collection.getOrFetch(this._getPin($(e.currentTarget)));
    var view = new Simterest.Views.PinForm({
      model: pin,
      collection: this.collection
    })
    this.collection.trigger("openModal", view)
  },

  editPin: function (e) {
    e.preventDefault();
    var pin = this.collection.getOrFetch(this._getPin($(e.currentTarget)));
    var view = new Simterest.Views.PinEditForm({
      model: pin,
      collection: this.collection
    })
    this.collection.trigger("openModal", view)
  },


  _getPin: function ($target) {
    return $target.parent().parent().data("id");
  }
})
