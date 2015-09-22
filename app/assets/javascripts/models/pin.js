Simterest.Models.Pin = Backbone.Model.extend({
  urlRoot: "api/pins",

  initialize: function (attrs) {
    this.setId();
  },

  parse: function (payload) {
    return payload
  },

  toJSON: function () {
    return { pin: _.clone(this.attributes) }
  },


})
