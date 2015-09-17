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
    var data = $("form.user").serializeJSON();
    var user = this.model
    user.save(data.user, {
      success: function (model, response, options) {
        this.model.trigger("closeModal")
      }.bind(this)
    })
  }
})
