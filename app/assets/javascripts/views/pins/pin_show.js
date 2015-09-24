Simterest.Views.PinShow = Backbone.CompositeView.extend({
  template: JST['pins/pin_show'],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.model, "sync", this.addComments);
  },

  render: function () {
    this.$el.html(this.template({
      user: this.user,
      pin: this.model
    }))
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
