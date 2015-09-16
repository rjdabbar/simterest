Simterest.Views.PinForm = Backbone.CompositeView.extend({
  template: JST['pins/pin_form'],
  className: "pin-form",

  events: {
    "click li.pin-board-item" : "submit"
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
    var board_id = $(e.currentTarget).data("id");
    var description = $("textarea#pin_description").val();
    var pin = this.model
    pin.set({board_id: board_id, description: description})
    pin.save({}, {
      success: function (model, response, options) {
        this.collection.add(pin);
      }.bind(this)
    })
  }

})
