Simterest.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["boards/board_index"],
  className: "boards",

  initialize: function () {
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  render: function () {
    this.$el.html(this.template())
    this.addBoards();
    return this;
  },

  addBoards: function () {
    this.collection.each(function(board){
      var view = new Simterest.Views.BoardIndexItem({
        model: board
      });
      this.addSubview("ul.board-index", view);
    }.bind(this))
  }
})
