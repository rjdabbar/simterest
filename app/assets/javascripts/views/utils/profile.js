Simterest.Views.Profile = Backbone.View.extend({
  template: JST["utils/profile"],
  className: "profile-link",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
