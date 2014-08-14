//AviorCollection.js
//Backbone collections hold instances of front-end models.
//Not every front-end model needs a collection, but if you are building a table of many elements,
// like ports or flows, you will need one.
// http://backbonejs.org/#Collection

define([
        "backbone",
        "util",
        "Models/AviorModel"
], function(Backbone,Util,Avior){
        var AviorCollection = Backbone.Collection.extend({
                url: Util.missingCtlrErr,
                model: Avior,
                comparator: function(av){
                        return av.get("DPID"); //the comparator lets the front-end know how to distinguish between one switch and a group of switches here
                },
        });
        return AviorCollection;
});
