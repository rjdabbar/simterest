Simterest.Views.Header = Backbone.View.extend({
  template: JST["header"],

  events: {
    "click button.profile": "userShow"
  },

  initialize: function () {
    this.listenTo(Simterest.currentUser, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  userShow: function () {
    Backbone.history.navigate("" + Simterest.currentUser.id, {trigger: true})
  }
})
