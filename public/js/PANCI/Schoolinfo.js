var vFormPanel;
Ext.Loader.setConfig({
    enabled : true
});
Ext.application({
	name: 'Schoolinfo',
    appFolder: 'js/PANCI',
     controllers: [
        'SchoolinfoController'
    ],
	autoCreateViewport: true,
	launch: function() {
       
	   
	   //vFormPanel = Ext.create('Schoolinfo.view.DemoFormPanel');
	}
});


