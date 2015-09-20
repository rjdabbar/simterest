Simterest.Models.Pin = Backbone.Model.extend({
  urlRoot: "api/pins",

  parse: function (payload) {
    return payload
  },

  toJSON: function () {
    return { pin: _.clone(this.attributes) }
  },

  // board: function () {
  //   if (typeof this._board === "undefined") {
  //     this._board = new Simterest.Models.Board();
  //   }
  //   return this._board
  // }
})
