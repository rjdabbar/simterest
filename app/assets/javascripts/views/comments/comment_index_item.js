Simterest.Views.CommentIndexItem = Backbone.View.extend({
  template: JST["comments/comment_index_item"],
  tagName: "li",
  className: "comment comment-item",

  initialize: function (options) {
    this.commenter = options.commenter;
    this.listenTo(this.commenter, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({
      comment: this.model,
      commenter: this.commenter
    }));
    return this;
  }
})
