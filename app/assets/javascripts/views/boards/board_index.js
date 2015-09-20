Simterest.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["boards/board_index"],
  className: "boards",

  events: {
    "click li.new-board": "newBoardModal",
    "click li.board-item": "showBoard"
  },

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  render: function () {
    this.$el.html(this.template())
    this.addBoards();
    this.addNewBoard();
    return this;
  },

  addBoards: function () {
    this.collection.each(function(board){
      var view = new Simterest.Views.BoardIndexItem({
        model: board,
        collection: this.collection
      });
      this.addSubview("ul.public-board-index", view, true);
    }.bind(this))
  },

  addNewBoard: function () {
    if (Simterest.currentUser.id === this.user.id) {
      var view = new Simterest.Views.BoardNewItem();
      this.addSubview("ul.public-board-index", view, true)
    }
  },

  newBoardModal: function (e) {
    e.preventDefault();
    var board = new Simterest.Models.Board();
    var view = new Simterest.Views.BoardForm({
      collection: this.collection,
      model: board
    });
    this.collection.trigger("openModal", view)
  },

  showBoard:function (e) {
    e.preventDefault();
    var board = this.collection.getOrFetch($(e.currentTarget).data("id"));
    this.collection.trigger("showBoard", board);
  }
})
