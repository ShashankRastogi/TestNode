 var required = '<span class="requiredFld" data-qtip="Required">*</span>';
		
  Ext.define('DemoApp.view.DemoFormPanel' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.demoFormPanel',
	
			frame: true,
			width: 350,
			height: 125,
			bodyPadding: 10,
			border: true,
			
			fieldDefaults: {
				labelWidth: 110,
				labelAlign: 'left'
			},
			
			items: [{
				name: 'userName',
				itemId: 'userName',
				xtype: 'textfield',
				fieldLabel: 'User Name',
				afterLabelTextTpl: required,
				allowBlank: false
			}, {
				name: 'address',
				itemId: 'address',
				xtype: 'textfield',
				fieldLabel: 'Address',
				afterLabelTextTpl: required,
				allowBlank: false
			}],
			buttons: [
				{
					text: 'Cancel',
					handler: function() {
						Ext.MessageBox.alert('Thank you!', 'Cancel');
					}
				},
				{
					text: 'Submit',
					handler: function() {
					
							alert("Hello");
						
					}
				}
			]
		});
		
