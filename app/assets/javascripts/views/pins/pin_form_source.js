Simterest.Views.PinFormSource = Backbone.View.extend({
  template: JST["pins/pin_form_source"],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
