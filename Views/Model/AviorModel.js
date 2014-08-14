//AviorModel.js
//This is a simple file that allows you to create a Backbone model for the front-end.
//Create a model file for every one of your data elements that you want to show up in the front-end.
//These models manage changes in the data, allowing you to fetch up-to-date data from the API.
// http://backbonejs.org/#Model

define([
	"backbone",
	"util",
], function(Backbone, Util){
	var Avior = Backbone.Model.extend();
	return Avior;
});
