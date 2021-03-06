Simterest.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/board_show"],
  className: "content",

  events: {
    "click div.screen": "closeModal",
    "click button.close": "closeModal"
  },

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add remove", this.render);
    this.listenTo(this.collection, "openModal", this.openModal)
    this.listenTo(this.collection, "closeModal", this.closeModal)
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    this.addPinIndex();
    return this;
  },

  addPinIndex: function () {
    var pinIndex = new Simterest.Views.PinIndex({
      user: this.user,
      collection: this.collection
    });
    this.addSubview("div.main-content", pinIndex)
  },

})
