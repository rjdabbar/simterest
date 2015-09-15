Simterest.Views.BoardForm = Backbone.View.extend({
  template: JST["boards/board_form"],
  className: "board-form",

  events: {
    "submit form" : "submit"
  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var data = $(e.currentTarget).serializeJSON();
    var board = this.model
    board.save(data.board, {
      success: function (model, response, options) {
        this.collection.add(board)
      }.bind(this)
    })
  }
})
