Simterest.Views.PinShow = Backbone.CompositeView.extend({
  template: JST['pins/pin_show'],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({pin: this.model}))
    return this;
  }
})
