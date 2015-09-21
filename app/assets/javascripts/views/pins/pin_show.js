Simterest.Views.PinShow = Backbone.View.extend({
  template: JST['pins/pin_show'],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({pin: this.model}))
    return this;
  }
})
