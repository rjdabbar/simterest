Simterest.Views.BoardIndexItemPinThumb = Backbone.View.extend({
  template: JST["boards/board_index_item_pin_thumb"],
  tagName: "img",

  attributes: function () {
    return {
      "src": this.model.get("image_url"),
      "alt": "pin"
    }
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
