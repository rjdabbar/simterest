Simterest.Views.Header = Backbone.CompositeView.extend({
  template: JST["header"],

  events: {
    "click button.profile": "userShow",
    "click button.sign-out": "signOut",
    "input input.query": "multiSearch",
    "click button.search": "pinSearch"

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
    Backbone.history.navigate("" + Simterest.currentUser.get("slug"), {trigger: true})
  },

  signOut: function (e) {
    e.preventDefault();
    Simterest.currentUser.signOut();
  },

  multiSearch: function (e) {
    e.preventDefault();
    this.searchResults.query = this.$("input.query").val();
    this.searchResults.fetch({
      data: {
        query: this.searchResults.query,
        multi: true
      },
      reset: true
    });
  },

  pinSearch: function (e) {
    e.preventDefault();
    this.searchResults.query = this.$("input.query").val();
    this.searchResults.fetch({
      data: {
        query: this.searchResults.query
      },
      reset: true
    });
    // why isnt this encoding
    var encoded = encodeURI(this.searchResults.query.split(" ").join("+"));
    Backbone.history.navigate("/search/query=" + encoded, { trigger: true });
  },

  hideSearchResults: function () {
    if(this.searchResults.length === 0) {
      this.$("div.search-results").hide();
    }
  },

  clearSearchResults: function () {
    $("div.search-results").hide();
    this.$("input.query").val("");
  },


})
