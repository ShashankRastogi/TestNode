Ext.define('Left.controller.LeftController', {
	extend : 'Ext.app.Controller',
	views : ['LeftFormPanel'],
	init : function() {
	
		this.control({
			'LeftFormPanel' : {
				render : this.onLeftFormPanelRendered
			}	
			})
		
	},
	
	onLeftFormPanelRendered: function(myPanel){
			console.log("Testing");
	}
	
});