Simterest.Collections.SearchResults = Backbone.Collection.extend({
  url: "api/search",

  parse: function (resp) {
    return resp;
  },

  model: function (attrs) {
    var type = attrs._type;
    delete attrs._type;
    return new Simterest.Models[type](attrs);
  }
})
