Simterest.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/user_show"],
  className: "user-show",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
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
    this.addSubview(".user-show",boardIndex);
  }
})
