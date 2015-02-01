Ext.define('Booking.controller.BookingController', {
	extend : 'Ext.app.Controller',
	views : ['BookingFormPanel'],
	init : function() {
	
		this.control({
			'BookingFormPanel' : {
				render : this.onBookingFormPanelRendered
			}	
			})
		
	},
	
	onBookingFormPanelRendered: function(myPanel){
			console.log("Testing");
	}
	
});