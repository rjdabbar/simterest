Simterest.Views.PinFormUrl = Backbone.View.extend({
  template: JST["pins/pin_form_url"],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
