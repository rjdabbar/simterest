Simterest.Views.BoardIndexItem = Backbone.View.extend({
  template: JST["boards/board_index_item"],
  tagName: "li",
  className: "board",

  events: {
    "click button.edit": "openEditModal"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  openEditModal: function (e) {
    e.preventDefault();
    var board = this.model;
    var view = new Simterest.Views.BoardForm({
      collection: this.collection,
      model: board
    });
    this.model.trigger("openModal", view)
  }
})
