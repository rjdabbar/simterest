Simterest.Views.PinFormUrl = Backbone.View.extend({
  template: JST["pins/pin_form_url"],

  events: {
    "click button.next": "openForm"
  },

  initialize: function () {},

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  openForm: function (e) {
    e.preventDefault();

    var data = $("input.source-url-input").serializeJSON();
    this.model.set(data.pin)
    var view = new Simterest.Views.PinForm({
      model: this.model,
      collection: this.collection
    });
    this.collection.trigger("openModal", view)
  }
})
