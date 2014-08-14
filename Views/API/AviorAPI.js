//AviorAPI.js
//The API files in the front-end talk to the Sails models in the back-end JSON API.
//Use the Sails routes here, not the native SDN controller ones.
//Sails.js binds routes like so:
//  /<model>/find = GET
//  /<model>/create = POST
//  /<model>/update = PUT
//  /<model>/destroy = DELETE
//You can add other parsing functions or parameters here to Avior.prototype too.
//Create an API file for a group of calls that match, such as for /flow/find, /flow/create and /flow/destroy

define([
	"Models/AviorModel"
], function(Avior){
	Avior.prototype.urlRoot = function() {return "/avior/find/" + this.DPID + "";};
	Avior.prototype.initialize = function(DPID) {this.DPID = DPID;};
	return Avior;
});
