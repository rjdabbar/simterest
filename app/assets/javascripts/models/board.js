Simterest.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",


  initialize: function (attrs) {
    this.setId();
  },

  setId: function () {
    if (typeof this.id === "string") {
      this.id = this.id.split("_").pop();
    }
  },

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
