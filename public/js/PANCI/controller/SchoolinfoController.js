Ext.define('Schoolinfo.controller.SchoolinfoController', {
	extend : 'Ext.app.Controller',
	views : ['SchoolinfoFormPanel'],
	init : function() {
	
		this.control({
			'SchoolinfoFormPanel' : {
				render : this.onSchoolinfoFormPanelRendered
			}	
			})
		
	},
	
	onSchoolinfoFormPanelRendered: function(myPanel){
			console.log("Testing");
	}
	
});