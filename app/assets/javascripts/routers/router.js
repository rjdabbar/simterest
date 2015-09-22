Simterest.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
    this.users = options.users
    this.users.fetch();
  },

  routes: {
    ""                : "index",
    ":userId"         : "userShow",
    ":userId/:boardId": "boardShow",
    "search"          : "search"
  },

  index: function () {},

  userShow: function (userId) {
    var user = this.users.getOrFetch(userId);
    var view = new Simterest.Views.UserShow({
      model: user
    });
    this.swapView(view);
  },

  boardShow: function (userId, boardId) {
    var user = this.users.getOrFetch(userId);
    var board = user.boards().getOrFetch(boardId);
    var view = new Simterest.Views.BoardShow({
      user: user,
      model: board,
      collection: board.pins()
    });
    this.swapView(view)
  },

  search: function () {
    var view = new Simterest.Views.SearchIndex();
    this.swapView(view);
  },


  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})
