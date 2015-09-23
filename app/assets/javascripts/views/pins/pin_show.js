Simterest.Views.PinShow = Backbone.CompositeView.extend({
  template: JST['pins/pin_show'],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({pin: this.model}))
    this.addComments();
    return this;
  },

  addComments: function () {
    var view = new Simterest.Views.CommentIndex({
      collection: this.model.comments(),
      pin: this.model
    });
    this.addSubview("div.pin-comments", view);
  }
})
