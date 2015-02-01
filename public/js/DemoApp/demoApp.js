var vFormPanel;
Ext.Loader.setConfig({
    enabled : true
});
Ext.application({
	name: 'DemoApp',
    appFolder: 'js/DemoApp',
     controllers: [
        'DEMOController'
    ],
	autoCreateViewport: true,
	launch: function() {
       
	   
	   //vFormPanel = Ext.create('DemoApp.view.DemoFormPanel');
	}
});


