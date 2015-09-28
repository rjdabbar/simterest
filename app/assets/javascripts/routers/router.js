Simterest.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
    this.users = options.users
    this.users.fetch();
  },

  routes: {
    ""                    : "index",
    "search/query=:query" : "search",
    ":userId"             : "userShow",
    ":userId/:boardId"    : "boardShow",
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

  search: function (query) {
    var view = new Simterest.Views.SearchResults({
      query: query
    });
    this.swapView(view);
  },


  swapView: function (view) {
    $("div.splash").remove();
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})
