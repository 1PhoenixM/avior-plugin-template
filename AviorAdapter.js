//AviorAdapter.js
//Fill out all properties in this object as they apply to your plugin.

module.exports = {

	supported: ['floodlight', 'opendaylight'], //An array of strings, each representing a lower-case version of an SDN controller your adapter supports.

	
	floodlight: {getModel: restCall('GET', '/rest/api/call/for/floodlight'),
			TO_OFP: {'AviorPropertyName': 'floodlightPropName'},
		     	parser: function(object){ 
				//parse raw JSON here to an array of objects like:
				//[{DPID:"XX:XX:XX:XX:XX:XX:XX:XX", SomeModelProperty: 1},
				//{DPID: "XX:XX:XX:XX:XX:XX:XX:X0", SomeModelProperty: 2}]
			  },
			models: ['avior', 'port', 'flow'] //Use the identities of the model files.
			},

	opendaylight: {getModel: restCall('GET', '/rest/api/call/for/opendaylight'),
			TO_OFP: {'AviorPropertyName': 'opendaylightPropName'},
		     	parser: function(object){ 
				//parse raw JSON here to an array of objects like:
				//[{DPID:"XX:XX:XX:XX:XX:XX:XX:XX", SomeModelProperty: 1},
				//{DPID: "XX:XX:XX:XX:XX:XX:XX:X0", SomeModelProperty: 2}]
			  },
			models: ['avior', 'port', 'flow'] //Use the identities of the model files.
			}
};
