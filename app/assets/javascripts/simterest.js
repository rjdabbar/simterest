window.Simterest = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Globals: {},
  initialize: function() {
    this.currentUser = new Simterest.Models.CurrentUser();
    this.currentUser.fetch();
    Simterest.Collections.users = new Simterest.Collections.Users();
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
