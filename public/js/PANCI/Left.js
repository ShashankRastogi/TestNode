var vFormPanel;
Ext.Loader.setConfig({
    enabled : true
});
Ext.application({
	name: 'Left',
    appFolder: 'js/PANCI',
     controllers: [
        'LeftController'
    ],
	autoCreateViewport: true,
	launch: function() {
       
	   
	   //vFormPanel = Ext.create('Left.view.DemoFormPanel');
	}
});


