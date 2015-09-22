Simterest.Views.SearchIndex = Backbone.CompositeView.extend({
  template: JST['search/search_index'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.populateSearchResults);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  populateSearchResults: function () {
    this.removeSubviews("ul.results-list");
    this.collection.each(function(result) {
      $("div.search-results").show();
      if (!result.attributes.pinner_id) {
        var view = new Simterest.Views.SearchIndexItem({
          model: result
        });
        this.addSubview("ul.results-list", view)
      }
    }.bind(this))
  },
})
