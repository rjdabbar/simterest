Simterest.Views.SearchIndex = Backbone.CompositeView.extend({
  template: JST['search/search_index'],
  tagName: "ul",
  className: "results-list",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.populateSearchResults);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  populateSearchResults: function () {
    this.removeSubviews();
    this.collection.each(function(result) {
      $("div.search-results").show();
      if (!result.attributes.pinner_id) {
        var view = new Simterest.Views.SearchIndexItem({
          model: result
        });
        if (result.attributes.title) {
          this.addSubview("ul.boards", view)
        } else {
          this.addSubview("ul.pinners", view)
        }
      }
    }.bind(this))
  },
})
