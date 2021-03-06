Simterest.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/user_show"],
  className: "content",

  events: {
    "click div.screen": "closeModal",
    "click button.close": "closeModal",
    "click button.edit-profile": "editProfie"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.boards(), "showBoard", this.showBoard)
    this._bindOpenModalListeners();
    this._bindCloseModalListeners();
    this._bindIndexListeners();
  },

  render: function () {
    this.$el.html(this.template({user: this.model}))
    this.addNav();
    this.addBoardIndex();
    return this;
  },

  addNav: function () {
    var userNav = new Simterest.Views.UserShowNav({
      model: this.model
    });
    this.addSubview(".user-show", userNav);
  },

  addBoardIndex: function () {
    var boardIndex = new Simterest.Views.BoardIndex({
      user: this.model,
      collection: this.model.boards()
    });
    this.swapIndex(boardIndex);
  },

  addPinIndex: function () {
    var pinIndex = new Simterest.Views.PinIndex({
      user: this.model,
      collection: this.model.pins()
    });
    this.swapIndex(pinIndex);
  },

  showBoard: function (board) {
    Backbone.history.navigate(this.model.get("slug") + "/" + board.get("slug"), {trigger: true})
  },

  editProfie: function (e) {
    e.preventDefault();
    var view = new Simterest.Views.UserEditForm({
      model: this.model
    });
    this.openModal(view);
  },

  swapIndex: function (newIndex) {
    this.currentIndex && this.removeSubview(".main-content", this.currentIndex);
    this.currentIndex = newIndex;
    this.addSubview(".main-content", newIndex);
  },

  _bindOpenModalListeners: function () {
    this.listenTo(this.model.boards(), "openModal", this.openModal);
    this.listenTo(this.model.pins(), "openModal", this.openModal);
  },

  _bindCloseModalListeners: function () {
    this.listenTo(this.model, "closeModal", this.closeModal);
    this.listenTo(this.model.boards(), "closeModal", this.closeModal);
    this.listenTo(this.model.pins(), "closeModal", this.closeModal);
  },

  _bindIndexListeners: function () {
    this.listenTo(this.model.boards(), "showBoards", this.addBoardIndex);
    this.listenTo(this.model.pins(), "showPins", this.addPinIndex);
  }


})
