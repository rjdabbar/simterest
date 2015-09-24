Simterest.Collections.SearchResults = Backbone.Collection.extend({
  url: "/api/search",

  parse: function (resp) {
    return resp;
  },

  model: function (attrs) {
    if (attrs.pinner_id) {
      return new Simterest.Models.Pin(attrs)
    } else {
      var type = attrs._type;
      delete attrs._type;
      return new Simterest.Models[type](attrs);
    }
  }
})
