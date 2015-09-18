Simterest.Views.Root = Backbone.CompositeView.extend({
  template: JST["shared/root"],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
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
