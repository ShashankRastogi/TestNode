Ext.define('Advancedsearch.controller.AdvancedsearchController', {
	extend : 'Ext.app.Controller',
	views : ['AdvancedsearchFormPanel'],
	init : function() {
	
		this.control({
			'AdvancedsearchFormPanel' : {
				render : this.onAdvancedsearchFormPanelRendered
			}	
			})
		
	},
	
	onAdvancedsearchFormPanelRendered: function(myPanel){
			console.log("Testing");
	}
	
});