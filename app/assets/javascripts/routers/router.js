Simterest.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
    this.users = options.users
    this.users.fetch();
  },

  routes: {
    "": "index",
    "session/new": "auth",
    "users/new": "auth",
    ":userId": "userShow",
    ":userId/:boardId": "boardShow",
  },

  index: function () {
    var callback = this.index.bind(this);
    if (!this._requireSignedIn(callback)) { return; }
  },

  userShow: function (userId) {
    var callback = this.userShow.bind(this, userId);
    if (!this._requireSignedIn(callback)) { return; }

    var user = this.users.getOrFetch(userId);
    var view = new Simterest.Views.UserShow({
      model: user
    });
    this._swapView(view);
  },

  boardShow: function (userId, boardId) {
    var callback = this.boardShow.bind(this, userId, boardId);
    if (!this._requireSignedIn(callback)) { return; }

    var user = this.users.getOrFetch(userId);
    var board = user.boards().getOrFetch(boardId);
    var view = new Simterest.Views.BoardShow({
      model: board,
      collection: board.pins()
    });
    this._swapView(view)
  },

  auth: function (callback, options) {
    var route = Backbone.history.getFragment();
    var view = new Simterest.Views.Landing({
      route: route,
      model: Simterest.currentUser
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  _requireSignedIn: function (callback) {
    if (!Simterest.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      return false;
    };
    return true;
  },

  _requireSignedOut: function (callback) {
    if(Simterest.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    };
    return true;
  },

  _goHome: function () {
    Backbone.history.navigate("", { trigger: true });
  }

})
