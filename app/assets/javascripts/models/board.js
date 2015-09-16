Simterest.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  pins: function () {
    if (this._pins === undefined) {
      this._pins = new Simterest.Collections.Pins([], {board_id: this.id})
    };
    return this._pins
  },

  parse: function (payload) {
    if (payload.pins) {
      this.pins().set(payload.pins, {parse: true})
      delete payload.pins
    };
      return payload
  },

  toJSON: function () {
    return { board: _.clone(this.attributes) };
  }

})
