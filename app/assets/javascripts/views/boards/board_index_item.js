Simterest.Views.BoardIndexItem = Backbone.View.extend({
  template: JST["boards/board_index_item"],
  tagName: "li",
  className: "board",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  }
})
