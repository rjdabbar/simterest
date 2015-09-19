Simterest.Views.SignIn = Backbone.View.extend({
  template: JST["users/sign_in"],

  evetns: {
    "click button": "submit"
  },

  initialize: function (options) {
    this.callback = options.callback;
    this.listenTo(Simterest.currentUser, "signIn", this.signInCallback)
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var creds = $(e.currentUser).serializeJSON().user;
    Simterest.currentUser.signIn({
      username: creds.username,
      password: creds.password,
      error: function () {
        alert("Wrong username/password combination. Please try again!")
      }
    });
  },

  signInCallback: function (e) {
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("", { trigger: true });
    }
  }
})
