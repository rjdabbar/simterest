Simterest.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
    this.users = options.users
    this.users.fetch();
  },

  routes: {
    "": "index",
    ":userId": "userShow",
    ":userId/boards": "boardIndex",
  },

  index: function () {},

  userShow: function (userId) {
    var user = this.users.getOrFetch(userId);
    var view = new Simterest.Views.UserShow({
      model: user
    });
    this.swapView(view);
  },

  boardIndex: function (userId) {
    var user = this.users.getOrFetch(userId);
    var boards = user.boards();
  },


  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})
