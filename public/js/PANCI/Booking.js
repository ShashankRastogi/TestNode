var vFormPanel;
Ext.Loader.setConfig({
    enabled : true
});
Ext.application({
	name: 'Booking',
    appFolder: 'js/PANCI',
     controllers: [
        'BookingController'
    ],
	autoCreateViewport: true,
	launch: function() {
       
	   
	   //vFormPanel = Ext.create('Booking.view.DemoFormPanel');
	}
});


