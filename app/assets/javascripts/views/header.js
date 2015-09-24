Simterest.Views.Header = Backbone.CompositeView.extend({
  template: JST["header"],

  events: {
    "click button.profile": "userShow",
    "click button.sign-out": "signOut",
    "input input.query": "search"

  },

  initialize: function () {
    this.searchResults = new Simterest.Collections.SearchResults();
    this.searchResultsView = new Simterest.Views.SearchIndex({
      collection: this.searchResults
    });
    this.listenTo(Simterest.currentUser, "sync", this.render);
    this.listenTo(this.searchResults, "sync", this.hideSearchResults);
    this.listenTo(Backbone.history, "route", this.clearSearchResults)
  },

  render: function () {
    this.$el.html(this.template());
    this.addSubview("div.search-results", this.searchResultsView)
    return this;
  },

  userShow: function (e) {
    e.preventDefault();
    Backbone.history.navigate("" + Simterest.currentUser.id, {trigger: true})
  },

  signOut: function (e) {
    e.preventDefault();
    Simterest.currentUser.signOut();
  },

  search: function (e) {
    e.preventDefault();
    this.searchResults.query = this.$("input.query").val();
    this.searchResults.fetch({
      data: {
        query: this.searchResults.query
      },
      reset: true
    });
  },

  hideSearchResults: function () {
    if(this.searchResults.length === 0) {
      this.$("div.search-results").hide();
    }
  },

  clearSearchResults: function () {
    this.$("div.search-results").hide();
    this.$("input.query").val("");
  },


})
