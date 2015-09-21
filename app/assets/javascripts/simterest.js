window.Simterest = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Globals: {},
  initialize: function() {
    Simterest.Collections.users = new Simterest.Collections.Users();
    Simterest.currentUser = new Simterest.Models.CurrentUser();
    Simterest.currentUser.fetch();
    this.header = new Simterest.Views.Header({ el: ".header"})
    new Simterest.Routers.Router({
      users: Simterest.Collections.users,
      $rootEl: $(".appContent")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Simterest.initialize();
});
