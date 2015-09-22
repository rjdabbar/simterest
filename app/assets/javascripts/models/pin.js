Simterest.Models.Pin = Backbone.Model.extend({
  urlRoot: "api/pins",

  initialize: function (attrs) {
    this.setId();
  },

  setId: function () {
    if (typeof this.id === "string") {
      this.id = this.id.split("_").pop();
    }
  },

  parse: function (payload) {
    return payload
  },

  toJSON: function () {
    return { pin: _.clone(this.attributes) }
  },


})
