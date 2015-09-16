Simterest.Views.PinFormBoardListItem = Backbone.View.extend({
  template: JST["pins/pin_form_board_list_item"],
  tagName: "li",
  className: "pin-board-item",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  }
})
