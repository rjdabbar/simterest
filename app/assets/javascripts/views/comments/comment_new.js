Simterest.Views.CommentNew = Backbone.View.extend({
  template: JST["comments/comment_new"],
  tagName: "li",
  className: "new-comment comment-item",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
