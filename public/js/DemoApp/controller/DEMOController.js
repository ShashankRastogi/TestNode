Ext.define('DemoApp.controller.DEMOController', {
	extend : 'Ext.app.Controller',
	views : ['DemoFormPanel'],
	init : function() {
	
		this.control({
			'demoFormPanel' : {
				render : this.onDemoFormPanelRendered
			}	
			})
		
	},
	
	onDemoFormPanelRendered: function(myPanel){
			console.log("Testing");
	}
	
});