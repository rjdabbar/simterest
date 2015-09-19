Simterest.Views.SignUp = Backbone.View.extend({
  template: JST["users/sign_up"],

  events: {
    "click button": "submit"
  },

  initialize: function (options) {
    this.callback = options.callback;
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var user = new Simterest.Models.User();
    var creds = $("form.user").serializeJSON().user;
    user.signUp({
      username: creds.username,
      password: creds.password,
      success: function () {
        Simterest.currentUser.signIn({
          username: creds.username,
          password: creds.password});
      
      }.bind(this),
      error: function () {
        alert("WUT")
      }
    });
  }
})
