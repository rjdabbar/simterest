Simterest.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST["search/search_results"],

  initialize: function (options) {
    this.query = options.query;
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  addPins: function () {
    this.collection.each(function(pin) {
      var view = new Simterest.Views.PinIndexItem({
        user: this.user,
        collection: this.collection,
        model: pin
      });
      this.addSubview("ul.search-index", view, true)
    }.bind(this))
  }

})
