Simterest.Views.SearchIndex = Backbone.CompositeView.extend({
  template: JST['search/search_index'],

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  populateSearchResults: function (results) {
    
  },
})
