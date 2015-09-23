Simterest.Models.Comment = Backbone.Model.extend({
  urlRoot: "api/comments",

  parse: function (payload) {
    return payload;
  },

  toJSON: function () {
    return {comment: _.clone(this.attributes) };
  }
})
