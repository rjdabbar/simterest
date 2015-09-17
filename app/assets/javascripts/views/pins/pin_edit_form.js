Simterest.Views.PinEditForm = Backbone.View.extend({
  template: JST["pins/pin_edit_form"],

  events: {
    "click button.save": "submit",
    "click button.delete": "destroyPin",
    "click button.cancel": "closeModal",
    "click button.close": "closeModal"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.boards = new Simterest.Collections.Boards();
    this.boards.fetch();
    this.listenTo(this.boards, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({
      pin: this.model,
      boards: this.boards
    }));
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var data = $("form.pin").serializeJSON();
    var pin = this.model;
    pin.save(data.pin, {
      success: function (model, response, options) {
        this.collection.trigger("closeModal");
      }.bind(this)
    })
  },

  destroyPin: function (e) {
    e.preventDefault();
    this.model.destroy();
    this.collection.trigger("closeModal");
  },

  closeModal: function (e) {
    e.preventDefault();
    this.collection.trigger("closeModal");
  }
})
