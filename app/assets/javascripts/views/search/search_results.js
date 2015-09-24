Simterest.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST["search/search_results"],

  initialize: function (options) {
    this.searchResults = new Simterest.Collections.SearchResults();
    this.query = options.query;
    this.fetchQuery();
    this.listenTo(this.searchResults, "sync", this.addPins)
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  addPins: function () {
    this.searchResults.each(function(pin) {
      var view = new Simterest.Views.PinIndexItem({
        collection: this.searchResults,
        model: pin
      });
      this.addSubview("ul.search-index", view, true)
    }.bind(this))
  },

  fetchQuery: function () {
    this.searchResults.fetch({
      data: {
        query: this.query
      }
    });
  }

})
