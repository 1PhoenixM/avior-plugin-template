//AviorView.js
//The view decides the behavior of the front-end.
//Create a new instance of your API file, then perform a .fetch() to get data.
//Render will render your HTML template with the data inside (example, your use case may vary):
//    this.$el.html(this.template({Tests: this.collection.models})).trigger('create');
//    return this;
//You can also provide a refresh button to get any changes from the SDN controller.
//http://backbonejs.org/#View

define([
	"jquery",
	"underscore",
	"backbone",
	"marionette",
	"API/AviorAPI.js",
	"text!template/aviortpl.html"
], function($, _, Backbone, Marionette, Avior, aviorTpl){
	var AviorView = Backbone.View.extend({
	    tagName: "div",
	    
		template: _.template(aviorTpl),
		
		initialize: function(){
			var self = this;
			this.collection = new Avior();
			this.collection.fetch();
			this.collapsed = true;
			// Update the collection when changes occur
			this.listenTo(this.collection, "sync", this.render);
		},
		
		events: {
			"click #refresh": "refresh",
		},
		
		
		// Render the collection
	    render: function() {
			this.$el.html(this.template({Tests: this.collection.models})).trigger('create');
			return this;
	    },
		refresh: function(){this.collection.fetch();},
		
		
	});
	return AviorView;
});

