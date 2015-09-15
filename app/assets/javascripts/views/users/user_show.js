Simterest.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/user_show"],
  className: "user-show",

  events: {
    "click div.screen": "closeModal"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model.boards(), "modal", this.newBoardModal)
  },

  render: function () {
    this.$el.html(this.template({user: this.model}))
    this.addBoards();
    return this;
  },

  addBoards: function () {
    var boardIndex = new Simterest.Views.BoardIndex({
      collection: this.model.boards()
    });
    this.addSubview(".user-show", boardIndex);
  },

  newBoardModal: function (view) {
    this.addSubview(".content-wrapper", view)
    this.setModal(view);
  },

  closeModal: function () {
    this.removeSubview(".content-wrapper", this.modal());
  },


})
