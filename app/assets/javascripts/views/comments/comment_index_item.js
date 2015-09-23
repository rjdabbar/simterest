Simterest.Views.CommentIndexItem = Backbone.View.extend({
  template: JST["comments/comment_index_item"],
  tagName: "li",
  className: "comment comment-item",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({comment: this.model}));
    return this;
  }
})
