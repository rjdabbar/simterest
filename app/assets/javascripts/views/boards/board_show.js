Simterest.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/board_show"],
  className: "content",

  events: {},

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add remove sync", this.reder)
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;    
  }
})
