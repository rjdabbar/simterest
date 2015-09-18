Simterest.Views.PinForm = Backbone.CompositeView.extend({
  template: JST['pins/pin_form'],
  className: "pin-form",

  events: {
    "click li.pin-board-item" : "submit"
  },

  initialize: function (options) {
    this.formData = options.formData
    this.boards = new Simterest.Collections.Boards();
    this.boards.fetch();
    this.listenTo(this.boards, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({pin: this.model}));
    this.populateBoards();
    return this;
  },

  populateBoards: function () {
    this.boards.each(function(board) {
      var view = new Simterest.Views.PinFormBoardListItem({
        model: board
      });
      this.addSubview("ul.pin-boards-list", view, true);
    }.bind(this));
  },

  submit: function (e) {
    e.preventDefault();
    if (this.formData) {
      this._submitWithUpload(e);
    } else {
      this._submitWithURL(e);
    };
  },

  _submitWithUpload: function (e) {
    this._updateFormData(e);
    var pin = this.model;
    pin.saveFormData(this.formData, {
      success: function (model, response, options) {
        this.collection.add(pin)
        this.collection.trigger("closeModal")
      }.bind(this)
    })
  },

  _submitWithURL: function (e) {
    var board_id = $(e.currentTarget).data("id");
    var description = $("textarea#pin_description").val();
    var pin = this.model
    pin.set({board_id: board_id, description: description})
    pin.save({}, {
      success: function (model, response, options) {
        this.collection.add(pin);
        this.collection.trigger("closeModal")
      }.bind(this)
    })
  },

  _updateFormData: function (e) {
    var board_id = $(e.currentTarget).data("id");
    var description = $("textarea#pin_description").val();
    this.formData.append("pin[board_id]", board_id);
    this.formData.append("pin[description]", description);
  }

})
