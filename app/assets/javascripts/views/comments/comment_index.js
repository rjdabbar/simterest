Simterest.Views.CommentIndex = Backbone.CompositeView.extend({
  template: JST["comments/comment_index"],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template())
    this.addNewComment();
    this.addComments();
    return this;
  },

  addNewComment: function () {
    var comment = new Simterest.Models.Comment();
    var view = new Simterest.Views.CommentNew({
      model: comment,
      collection: this.collection
    });
    this.addSubview("ul.comments", view);
  },

  addComments: function () {
    this.collection.each(function (comment) {
      var user = Simterest.Collections.users.getOrFetch(comment.get("author_id"))
      var view = new Simterest.Views.CommentIndexItem({
        model: comment,
        commenter: user
      })
      this.addSubview("ul.comments", view, true)
    }.bind(this))
  },

})
