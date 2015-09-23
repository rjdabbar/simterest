Simterest.Views.CommentIndex = Backbone.CompositeView.extend({
  template: JST["comments/comment_index"],

  initialize: function (options) {
    this.listenTo(this.collection, "sync remove", this.render);
    this.pin = options.pin;
  },

  render: function () {
    this.$el.html(this.template())
    this.removeSubviews();
    this.addNewComment();
    this.addComments();
    return this;
  },

  addNewComment: function () {
    var comment = new Simterest.Models.Comment();
    var view = new Simterest.Views.CommentNew({
      model: comment,
      collection: this.collection,
      pin: this.pin
    });
    this.addSubview("ul.comments", view, true);
  },

  addComments: function () {
    this.collection.each(function (comment) {
      var user = Simterest.Collections.users.getOrFetch(comment.get("author_id"))
      var view = new Simterest.Views.CommentIndexItem({
        model: comment,
        commenter: user,
        collection: this.collection
      })
      this.addSubview("ul.comments", view, true)
    }.bind(this))
  },

})
