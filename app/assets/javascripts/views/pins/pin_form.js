Simterest.Views.PinForm = Backbone.View.extend({
  template: JST['pins/pin_form'],
  className: "pin-form",

  events: {

  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  submit: function (e) {
    e.preventDefault();
  }

})
