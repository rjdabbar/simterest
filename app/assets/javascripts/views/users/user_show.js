Simterest.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/user_show"],
  className: "content",

  events: {
    "click div.screen": "closeModal"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.boards(), "openModal", this.boardModal);
    this.listenTo(this.model.boards(), "closeModal", this.closeModal);
  },

  render: function () {
    this.$el.html(this.template({user: this.model}))
    this.addBoardIndex();
    return this;
  },

  addBoardIndex: function () {
    var boardIndex = new Simterest.Views.BoardIndex({
      collection: this.model.boards()
    });
    this.swapIndex(boardIndex);
  },

  addPinIndex: function () {
    var pinIndex = new Simterest.Views.PinIndex({
      collection: this.model.pins()
    });
    this.swapIndex(pinIndex);
  },

  boardModal: function (view) {
    this.addSubview(".content-wrapper", view, true)
    this.setModal(view);
  },

  closeModal: function () {
    this.removeSubview(".content-wrapper", this.modal());
  },

  swapIndex: function (newIndex) {
    this.currentIndex && this.removeSubview(".main-content", this.currentIndex);
    this.currentIndex = newIndex;
    this.addSubview(".main-content", newIndex);
  }

})
