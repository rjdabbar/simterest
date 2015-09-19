Simterest.Views.SignUp = Backbone.View.extend({
  template: JST["users/sign_up"],

  events: {
    "click button": "submit"
  },

  initialize: function (options) {
    this.callback = options.callback;
    console.log("HI");
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var user = new Simterest.Models.User();
    var creds = $("form.user").serializeJSON().user;
    debugger
    user.signUp({
      username: creds.username,
      password: creds.password,
      error: function () {
        alert("WUT")
      }
    });
  }
})
