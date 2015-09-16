Simterest.Views.UserShowNav = Backbone.View.extend({
  template: JST["users/user_show_nav"],
  className: "user-page-nav",

  events: {
    "click div.nav-boards": "swapBoardIndex",
    "click div.nav-pins": "swapPinIndex"
    // all click events on icons
  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template({user: this.model}));
    return this;
  },

  swapBoardIndex: function () {
    this.model.boards().trigger("showBoards")
  },

  swapPinIndex: function () {
    this.model.pins().trigger("showPins")
  }

})
