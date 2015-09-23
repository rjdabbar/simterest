Simterest.Views.CommentNew = Backbone.View.extend({
  template: JST["comments/comment_new"],
  tagName: "li",
  className: "new-comment comment-item",

  events: {
    "click button.comment": "submitComment"
  },

  initialize: function (options) {
    this.pin = options.pin
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  submitComment: function (e) {
    e.preventDefault();
    var comment = this.model;
    var data = $("textarea.comment-body").serializeJSON();
    data.comment.pin_id = this.pin.id
    comment.save(data.comment, {
      success: function (modal, response, options) {
        this.collection.add(comment);
      }.bind(this)
    });
  }
})
