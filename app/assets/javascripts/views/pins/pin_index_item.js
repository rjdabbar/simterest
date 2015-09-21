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
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({
      pin: this.model
    }));
    return this;
  },

  showPin: function (e) {
    e.preventDefault();
    var pinId = $(e.currentTarget).parent().parent().data("id");
    
    var pin = this.collection.getOrFetch(pinId);
    var view = new Simterest.Views.PinShow({
      model: pin
    });
    this.collection.trigger("openModal", view)
  }
})
