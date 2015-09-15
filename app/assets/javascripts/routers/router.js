Simterest.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "index",
    ":userId": "userShow",
    ":userId/boards": "boardIndex",
  },

  index: function () {},

  userShow: function (userId) {},

  boardIndex: function (userId) {},


  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})
