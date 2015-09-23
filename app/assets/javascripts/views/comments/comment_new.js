Simterest.Views.CommentNew = Backbone.View.extend({
  template: JST["comments/comment_new"],
  tagName: "li",
  className: "new-comment comment-item",

  events: {
    "click button.comment": "submitComment"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  submitComment: function (e) {
    e.preventDefault();
    var comment = this.model;
    var data = $("textarea.comment-body").serializeJSON();
    comment.save(data.comment, {
      success: function (modal, response, options) {
        this.collection.add(comment);
      }.bind(this)
    });
  }
})
