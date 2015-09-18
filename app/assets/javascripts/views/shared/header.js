Simterest.Views.Header = Backbone.View.extend({
  template: JST["shared/header"],

  events: {},

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({user: Simterest.currentUser}));
  },

  signOut: function (e) {
    e.preventDefault();
    Simterest.currentUser.signOut({
      success: function () {
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  }
})
