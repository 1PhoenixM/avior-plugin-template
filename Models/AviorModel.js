//AviorModel.js
//In Sails.js, APIs are built on data models.
//Make a model file for every network element or other data element you want in your plugins.
//Examples of network elements include hosts, switches, ports, flows, security rules, port statistics, etc.
//For more options on how you can build models and validate them, and what data types are available, refer to http://sailsjs.org/#!documentation/models

module.exports = {
	identity: 'avior',

	connection: 'util',

	attributes: {
		Name: {
		    type: 'string',
		    required: true,
		},
		ID: {
		    type: 'integer',
		    required: true,
		},
		Description: {
		    type: 'string',
		    required: true
		},
		Date: {
		    type: 'date',
		    required: true
		},
    }
};
