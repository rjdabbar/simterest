Simterest.Views.Header = Backbone.CompositeView.extend({
  template: JST["header"],

  events: {
    "click button.profile": "userShow",
    "click button.sign-out": "signOut",
    "change input.query": "search"

  },

  initialize: function () {
    this.searchResults = new Simterest.Collections.SearchResults();
    this.listenTo(Simterest.currentUser, "sync", this.render);
    this.listenTo(this.searchResults, "sync", this.updateSearchResults)
  },

  render: function () {
    this.$el.html(this.template());
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
    this.searchResults.query = $("input.query").val();
    this.searchResults.fetch({
      data: {
        query: this.searchResults.query
      },
      success: function() {
        // debugger
      }.bind(this)
    });
  },

  updateSearchResults: function () {
    console.log(this.searchResults);
  }
})
