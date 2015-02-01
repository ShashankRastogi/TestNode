var vFormPanel;
Ext.Loader.setConfig({
    enabled : true
});
Ext.application({
	name: 'Advancedsearch',
    appFolder: 'js/PANCI',
     controllers: [
        'AdvancedsearchController'
    ],
	autoCreateViewport: true,
	launch: function() {
       
	   
	   //vFormPanel = Ext.create('Advancedsearch.view.AdvancedsearchFormPanel');
	}
});


