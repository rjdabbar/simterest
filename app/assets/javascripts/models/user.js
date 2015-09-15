Simterest.Models.User = Backbone.Model.extend({
  urlRoot: "api/users",

  boards: function () {
    if (this._boards === undefined) {
      this._boards = new Simterest.Collections.Boards([], {creator_id: this.id})
    };
    return this._boards;
  },

  parse: function (payload) {
    if (payload.boards) {
      this.boards().set(payload.boards, { parse: true });
      delete payload.boards;
    };
    return payload;
    
  }
})
