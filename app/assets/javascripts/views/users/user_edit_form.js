Simterest.Views.UserEditForm = Backbone.View.extend({
  template: JST["users/user_edit_form"],

  events: {
    "click button.save": "updateProfile"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({user: this.model}));
    return this;
  },

  updateProfile: function (e) {
    e.preventDefault();
    debugger
  }
})
