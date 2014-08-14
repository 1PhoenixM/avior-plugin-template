//Routes.js
//This sets up routes in the GUI.
//Not yet shown: requiring model/API files  

aviorRoute: function() {
			$('#content').empty();
			$('#leftPanel').empty();
			$('#rightPanel').empty();
			$('#content').append('<img class="innerPageLoader" src="img/ajax-loader.gif" />');
			
			// Clears out any previous intervals
			clearInterval(this.interval);
			
			// Create view
			this.aviorview = new AviorView({collection: new Avior});
			
			// Delegate events for view
			this.aviorview.delegateEvents(this.aviorview.events);
			
			this.aviorCollection = this.aviorview.collection;
			
			document.title = 'Avior - Plugin Title';
			
			//Set up dual-panel interface. Remove if not wanted
			layout = new FrontPage();
			layout.topologyShow();
			
			// Link to id tag
			$('#content').empty();
			$('#content').append(this.template).trigger('create');
			$('#leftPanel').append(this.aviorview.render().el).trigger('create');
			
        },
