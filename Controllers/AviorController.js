//AviorController.js

//In Sails.js, every Model file you create will work with its corresponding Controller file.
//Models are the core data, and Controllers contain the logic for the API.
//You can also bind "actions" to your model routes here.
//Names: "AviorModel.js" matches up with "AviorController.js"

module.exports = {

  identity: 'avior', //must be same as corresponding model identity

  _config: {actions: true, rest: true, shortcuts: true},

  index: function(req, res){
	return res.send("The AviorController is functioning properly!");
      //bound at localhost:1337/avior/index, where the message will be displayed.
  },

  anAction: function(req, res){
	//accessible at localhost:1337/<model name>/anAction
  },

};
