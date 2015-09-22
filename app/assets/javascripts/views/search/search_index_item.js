Simterst.Views.SearchIndexItem = Backbone.View.extend({
  template: JST['search/search_index_item'],
  tagName: "li",
  className: "search-item",

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  },
})
