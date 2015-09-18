Simterest.Views.BoardIndexItem = Backbone.CompositeView.extend({
  template: JST["boards/board_index_item"],
  tagName: "li",
  className: "board board-item",

  attributes: function () {
    return {
      "data-id": this.model.id
    }
  },

  events: {
    "click button.edit": "openEditModal"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.pins(), "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    this.addPinThumbs();
    return this;
  },

  addPinThumbs: function () {
    this.pins = this.model.pins();
    // LOGICS FOR GETTING THE RIGHT PINS SET
    // NEED TO FETCH?
    // this.addMainPin(GET THE RIGHT PIN);
    // this.addLittlePins(GET THE RIGHT PINS);
  },

  addMainPin: function (pin) {
    var view = new Simterest.Views.BoardIndexItemPinThumb({
      model: pin
    });
    this.addSubview("div.large-pin", view)
  },

  addLittlePins: function (pins) {
    pins.each(function(pin) {
      var view = new Simterest.Views.BoardIndexItemPinThumb({
        model: pin
      });
      this.addSubview("div.pin-thumbs", view, true)
    }.bind(this))
  },

  openEditModal: function (e) {
    e.preventDefault();
    var board = this.model;
    var view = new Simterest.Views.BoardForm({
      collection: this.collection,
      model: board
    });
    this.model.trigger("openModal", view)
  }
})
