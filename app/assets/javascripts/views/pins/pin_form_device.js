Simterest.Views.PinFormDevice = Backbone.View.extend({
  template: JST["pins/pin_form_device"],

  events: {
    "click button.next": "openForm"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  openForm: function (e) {
    e.preventDefault();
    var image = this.$("input.source-device-input")[0].files[0];
    var view = new Simterest.Views.PinForm({
      model: this.model,
      collection: this.collection,
      image: image
    });
    this.collection.trigger("openModal", view)
  },




})
