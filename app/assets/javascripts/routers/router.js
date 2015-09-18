Simterest.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
    this.users = options.users
    this.users.fetch();
  },

  routes: {
    "": "index",
    ":userId": "userShow",
    ":userId/:boardId": "boardShow",
  },

  index: function () {},

  userShow: function (userId) {
    var user = this.users.getOrFetch(userId);
    var view = new Simterest.Views.UserShow({
      model: user
    });
    this._swapView(view);
  },

  boardShow: function (userId, boardId) {
    var user = this.users.getOrFetch(userId);
    var board = user.boards().getOrFetch(boardId);
    var view = new Simterest.Views.BoardShow({
      model: board,
      collection: board.pins()
    });
    this._swapView(view)
  },

  signIn: function (callback) {
    if (!this._requireSignedOut(callback)) { return; }

    var view = new Simterest.Views.SignIn({
      callback: callback
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
      callback();
      return false;
    };
    return true;
  }

  _requireSignedOut: function (callback) {
    if(Simterest.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    };
    return true;
  },

  _goHome: function () {
    Backbone.history.navigate("", { trigger: true })''
  }

})
