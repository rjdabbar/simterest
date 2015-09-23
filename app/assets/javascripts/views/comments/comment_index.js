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
    })
  },

  addComments: function () {

  },

})
