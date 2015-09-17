Simterest.Views.PinIndexItem = Backbone.View.extend({
  template: JST["pins/pin_index_item"],
  tagName: "li",
  className: "pin",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({pin: this.model}));
    debugger
    return this;
  }
})
