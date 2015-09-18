Simterest.Views.SignUp = Backbone.View.extend({
  template: JST["users/sign_up"],

  evetns: {
    "click button.sign-up": "submit"
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
    var creds = $("form.sign-up").serializeJSON().user;
    debugger
    this.model.signUp({
      username: creds.username,
      password: creds.password,
      error: function () {},
      success: function () {
        // Simterest.currentUser =  new Simterest.Models.CurrentUser(this.model);
      }.bind(this)
    });
  },

  // signUpCallback: function (e) {
  //   if(this.callback) {
  //     this.callback();
  //   } else {
  //     Backbone.history.navigate("", { trigger: true });
  //   }
  // }
})
