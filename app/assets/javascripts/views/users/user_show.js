Simterest.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/user_show"],

  initialize: function () {},

  render: function () {
    this.$el.html(this.template({user: this.model}))
  }
})
