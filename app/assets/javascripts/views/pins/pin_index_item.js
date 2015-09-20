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
    // this.board = options.user.boards().getOrFetch(this.model.get("board_id"))
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.board, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({
      pin: this.model,
      // board: this.board
    }));
    return this;
  },




})
