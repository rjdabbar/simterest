Simterest.Views.CommentIndexItem = Backbone.View.extend({
  template: JST["comments/comment_index_item"],
  tagName: "li",
  className: "comment comment-item",

  events: {
    "click button.delete-comment": "deleteComment"
  },

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
  },

  deleteComment: function (e) {
    e.preventDefault();
    this.model.destroy();
  }
})
