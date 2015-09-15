Simterest.Views.BoardForm = Backbone.View.extend({
  template: JST["boards/board_form"],
  className: "board-form",

  events: {
    "submit form" : "submit",
    "click button.cancel": "closeModal",
    "click button.delete": "deleteBoard"
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
        this.collection.trigger("closeModal")
      }.bind(this)
    })
  },

  closeModal: function (e) {
    e.preventDefault();
    this.collection.trigger("closeModal");
  },

  deleteBoard: function (e) {
    e.preventDefault();
    this.model.destroy();
    this.collection.trigger("closeModal");
  }
})
