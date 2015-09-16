Simterest.Views.PinForm = Backbone.CompositeView.extend({
  template: JST['pins/pin_form'],
  className: "pin-form",

  events: {

  },

  initialize: function () {
    this.boards = new Simterest.Collections.Boards();
    this.boards.fetch();
    this.listenTo(this.boards, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template());
    this.populateBoards();
    return this;
  },

  populateBoards: function () {
    this.boards.each(function(board) {
      var view = new Simterest.Views.PinFormBoardListItem({
        model: board
      });
      this.addSubview("ul.pin-boards-list", view, true);
    }.bind(this));
  },

  submit: function (e) {
    e.preventDefault();
  }

})
