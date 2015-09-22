Simterest.Collections.SearchResults = Backbone.Collection.extend({
  url: "/api/search",

  parse: function (resp) {
    return resp;
  },

  model: function (attrs) {
    var type = attrs._type;
    delete attrs._type;
    if (type === "Board") {
      debugger
      return new Simterest.Models.Board(attrs)
    } else {
      debugger
      return new Simterest.Models.Pin(attrs)
    }
  }
})
