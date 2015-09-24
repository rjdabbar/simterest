Simterest.Models.Pin = Backbone.Model.extend({
  urlRoot: "api/pins",

  initialize: function () {},

  comments: function () {
    if (typeof this._comments === "undefined") {
      this._comments = new Simterest.Collections.Comments([], {pin_id: this.id})
    };
    return this._comments;
  },

  parse: function (payload) {
    if (payload.comments) {
      this.comments().set(payload.comments, { parse: true });
      delete payload.comments;
    }
    return payload;
  },

  toJSON: function () {
    return { pin: _.clone(this.attributes) }
  },

})
