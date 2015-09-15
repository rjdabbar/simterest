Simterest.Views.BoardForm = Backbone.View.extend({
  template: JST["boards/board_form"],
  className: "board-form",

  events: {
    "submit form" : "submit"
  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  submit: function (e) {
    e.preventDefault();
  }
})
