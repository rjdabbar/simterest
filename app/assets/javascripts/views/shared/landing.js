Simterest.Views.Landing = Backbone.CompositeView.extend({
  template: JST["shared/landing"],
  className: "content",

  initialize: function (options) {
    this.route = options.route;
    this.callback = options.callback;
  },

  render: function () {
    this.$el.html(this.template());
    this.selectAuth();
    return this;
  },

  selectAuth: function () {
    if (this.route === "session/new") {
      this.signIn(this.callback);
    } else {
      this.signUp(this.callback);
    }
  },

  signIn: function (callback) {
    var view = new Simterest.Views.SignIn({
      callback: callback
    });
    this.openModal(view);
  },

  signUp: function (callback) {
    var view = new Simterest.Views.SignUp({
      callback: callback
    });
    this.openModal(view);
  },

  openModal: function (view) {
    if (this.modal()) { this.closeModal(); };
    this.addSubview(".content-wrapper", view, true)
    this.setModal(view);
  },

  closeModal: function () {
    this.removeSubview(".content-wrapper", this.modal());
  },

})
