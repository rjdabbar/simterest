Simterest.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  parse: function (payload) {
      return payload
  },

  toJSON: function () {
    return { board: _.clone(this.attributes) };
  }

})
