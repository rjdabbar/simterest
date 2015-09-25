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
    var data = this._gatherFormData();

    var user = this.model
    user.saveFormData(data, {
      success: function (model, response, options) {
        this.model.trigger("closeModal")
        Backbone.history.navigate(this.model.get("slug"), {trigger: true})
      }.bind(this)
    })
  },

  _gatherFormData: function () {
    var fullName = this.$("#user_full_name").val();
    var avatar = this.$("#user_avatar")[0].files[0];
    var username = this.$("#user_username").val();
    var description = this.$("#user_description").val();
    var location = this.$("#user_location").val();
    var formData = new FormData();
    formData.append("user[full_name]", fullName);
    avatar && formData.append("user[avatar]", avatar);
    formData.append("user[username]", username);
    formData.append("user[description]", description);
    formData.append("user[location]", location);
    return formData;
  }
})
