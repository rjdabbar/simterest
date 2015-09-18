Simterest.Views.Root = Backbone.CompositeView.extend({
  template: JST["shared/root"],
  className: "content",

  initialize: function (options) {
    this.status = options.status
  },

  render: function () {
    this.$el.html(this.template());
    this.openModal(this.pickModal);
    return this;
  },

  pickModal: function () {
    if (this.status === "signIn") {
      var view = new Simterest.Views.SignIn({
        callback: callback
      });
      return view;
    } else {
      var user = new Simterest.Models.User();
      var view = new Simterest.Views.SignUp({
        model: user,
        callback: callback
      });
      return view;
    }
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
