Simterest.Models.User = Backbone.Model.extend({
  urlRoot: "api/users",

  boards: function () {
    if (typeof this._boards === "undefined") {
      this._boards = new Simterest.Collections.Boards([], {creator_id: this.id});
    };
    return this._boards;
  },

  pins: function () {
    if (typeof this._pins === "undefined") {
      this._pins = new Simterest.Collections.Pins([], {pinner: this});
    };
    return this._pins
  },

  parse: function (payload) {
    if (payload.boards) {
      this.boards().set(payload.boards, { parse: true });
      delete payload.boards;
    };

    if (payload.pins) {
      this.pins().set(payload.pins, { parse: true });
      delete payload.pins;
    };

    return payload;

  }
})
