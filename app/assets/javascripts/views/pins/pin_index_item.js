Simterest.Views.PinIndexItem = Backbone.View.extend({
  template: JST["pins/pin_index_item"],
  tagName: "li",
  className: "pin",

  attributes: function () {
    return {
      "data-id": this.model.id
    }
  },

  events: {
    "click div.pin-image": "showPin"
  },

  initialize: function (options) {
    this.user = options.user || Simterest.Collections.users.getOrFetch(this.model.get("pinner_id"));
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    this.$el.html(this.template({
      user: this.user,
      pin: this.model
    }));
    return this;
  },

  showPin: function (e) {
    e.preventDefault();

    var pin = this.collection.getOrFetch(this._getPin($(e.currentTarget)));
    var view = new Simterest.Views.PinShow({
      model: pin
    });
    this.collection.trigger("openModal", view)
  },

  _getPin: function ($target) {
    return $target.parent().parent().data("id");
  }
})
