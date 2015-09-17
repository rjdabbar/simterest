Simterest.Views.PinFormDevice = Backbone.View.extend({
  template: JST["pins/pin_form_device"],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
