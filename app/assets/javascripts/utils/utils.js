Backbone.Collection.prototype.getOrFetch = function (id) {
  var model = this.get(id);

  if (model) {
    model.fetch()
  } else {
    model = new this.model({id: id});
    this.add(model);
    model.fetch({
      error: function (model, response, options) {
        this.remove(model);
      }.bind(this)
    });
  };

  return model;
};

Backbone.Model.prototype.saveFormData = function (formData, options) {
  var method = this.isNew() ? "POST" : "PUT";
  var model = this;

  $.ajax({
    url: _.result(model, "url"),
    type: method,
    data: formData,
    processData: false,
    contentType: false,
    success: function(resp){
      model.set(model.parse(resp));
      model.trigger('sync', model, resp, options);
      options.success && options.success(model, resp, options);
    },
    error: function(resp){
      options.error && options.error(model, resp, options);
    }
  });
};

Backbone.Model.prototype.setId = function () {
  if (typeof this.id === "string") {
    this.id = this.id.split("_").pop();
  };
  if (typeof this.attributes.id === "string") {
    this.attributes.id = this.attributes.id.split("_").pop();
  };
},

Backbone.View.prototype.setModal = function (view) {
  this._modal = view;
};

Backbone.View.prototype.modal = function () {
  return this._modal;
};
