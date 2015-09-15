Simterest.Views.BoardNewItem = Backbone.View.extend({
  template: JST["boards/board_new_item"],
  className: "new-board board",
  tagName: "li",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template())
    return this;
  }
})
