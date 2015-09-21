Simterest.Views.Header = Backbone.View.extend({
  template: JST["header"],

  events: {
    "click button.profile": "userShow",
    "click button.sign-out": "signOut"

  },

  initialize: function () {
    this.listenTo(Simterest.currentUser, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  userShow: function (e) {
    e.preventDefault();
    Backbone.history.navigate("" + Simterest.currentUser.id, {trigger: true})
  },

  signOut: function (e) {
    e.preventDefault();

    Simterest.currentUser.signOut();

  }
})
