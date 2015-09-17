Simterest.Views.PinFormSource = Backbone.View.extend({
  template: JST["pins/pin_form_source"],

  events: {
    "click div.url-source": "urlSource",
    "click div.device-source": "deviceSource"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  urlSource: function () {
    var view = new Simterest.Views.PinFormUrl({
      model: this.model,
      collection: this.collection
    });
    this.collection.trigger("openModal", view)
  },

  deviceSource: function () {
    var view = new Simterest.Views.PinFormDevice({
      model: this.model,
      collection: this.collection
    });
    this.collection.trigger("openModal", view)
  }
})
