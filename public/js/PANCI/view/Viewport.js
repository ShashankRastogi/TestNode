Ext.define('Schoolinfo.view.Viewport', {
     extend: 'Ext.container.Viewport',
     layout: 'border',
     
          
          items: [
        {

		region: 'north',
            collapsible: true,
            margins: '0 0 5 0',
            title:'Header - PAN & CI',
            height: 100,
            minHeight: 60,//html:'Header information goes here',
             items: [{
                xtype: 'textfield',
                fieldLabel: 'Text field'
            }, {
                xtype: 'component',
                html: 'I am floatable'
            }]
        }, {
            region: 'west',
			collapsible: true,
			//xtype:'SchoolinfoFormPanel',
            title: 'Left Panel',
           	width: '20%',
            minWidth: 100,
            minHeight: 140,
            html:'Navigation goes here'
        }, {
     		region: 'south',
            collapsible: true,
            title: 'Details on Appointment',
            html: 'Footer Information goes here',
            height: 100,
            items: {
            xtype:'tabpanel',
            activeTab: 0,
            defaults:{
                bodyStyle:'padding:10px'
            },

            items:[{
                title:'Personal Details',
                defaultType: 'textfield',

                items: [{
                    fieldLabel: 'First Name',
                    name: 'first',
                    allowBlank:false,
                    value: 'Ed'
                },{
                    fieldLabel: 'Last Name',
                    name: 'last',
                    value: 'Spencer'
                },{
                    fieldLabel: 'Company',
                    name: 'company',
                    value: 'Ext JS'
                }, {
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype:'email'
                }]
            },{
                title:'Phone Numbers',
                defaultType: 'textfield',

                items: [{
                    fieldLabel: 'Home',
                    name: 'home',
                    value: '(888) 555-1212'
                },{
                    fieldLabel: 'Business',
                    name: 'business'
                },{
                    fieldLabel: 'Mobile',
                    name: 'mobile'
                },{
                    fieldLabel: 'Fax',
                    name: 'fax'
                }]
            }]
               } 
        }, {
            //xtype:'SchoolinfoFormPanel',
			collapsible: true,
			region: 'east',
            title: 'Running Updates',
            width: '30%',
            minWidth: 100,
            minHeight: 140,
            html:'Important information goes here'
        }, {
           
			collapsible: true,
			region: 'center',
            title:'Content Area ',
            //html:'Working Area mostly',
            items: [{
            xtype: 'container',
            anchor: '100%',
            layout:'column',
            items:[{
                xtype: 'container',
                columnWidth:.5,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'First Name',
                    name: 'first',
                    anchor:'96%'
                }, {
                    xtype:'textfield',
                    fieldLabel: 'Company',
                    name: 'company',
                    anchor:'96%'
                }]
            },{
                xtype: 'container',
                columnWidth:.5,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'Last Name',
                    name: 'last',
                    anchor:'100%'
                },{
                    xtype:'textfield',
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype:'email',
                    anchor:'100%'
                }]
            }]
        }, {
            xtype: 'htmleditor',
            name: 'bio',
            fieldLabel: 'Biography',
            height: 200,
            anchor: '100%'
        }]
        }]
   

});