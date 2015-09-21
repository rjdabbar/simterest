Simterest.Views.PinIndexItem = Backbone.View.extend({
  template: JST["pins/pin_index_item"],
  tagName: "li",
  className: "pin",

  attributes: function () {
    return {
      "data-id": this.model.id
    }
  },

  events: {

  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render)
    debugger
  },

  render: function () {
    this.$el.html(this.template({
      pin: this.model
    }));
    return this;
  },




})
