Simterest.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST["search/search_results"],

  events: {
    "click div.screen": "closeModal",
  },

  initialize: function (options) {
    this.searchResults = new Simterest.Collections.SearchResults();
    this.query = decodeURI(options.query);
    this.fetchQuery();

    this.listenTo(this.searchResults, "loaded", this.addPins);
    this.listenTo(this.searchResults, "openModal", this.openModal);
    this.listenTo(this.searchResults, "closeModal", this.closeModal);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  addPins: function () {
    this.removeSubviews();
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
      },
      reset: true,
      success: function () {
        this.searchResults.trigger("loaded")
      }.bind(this)
    });
  }

})
