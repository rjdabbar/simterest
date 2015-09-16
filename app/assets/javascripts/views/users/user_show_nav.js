Simterest.Views.UserShowNav = Backbone.View.extend({
  template: JST["users/user_show_nav"],
  className: "user-page-nav",

  events: {
    // all click events on icons
  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template({user: this.model}));
    return this;
  }

})
