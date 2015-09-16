Simterest.Models.Pin = Backbone.Model.extend({
  urlRoot: "api/pins",

  parse: function (payload) {
    return payload
  },

  toJSON: function () {
    return { pin: _.clone(this.attributes) }
  }
})
