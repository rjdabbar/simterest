window.Simterest = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Simterest.Routers.Router({
      $rootEl: $("appContent")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Simterest.initialize();
});
