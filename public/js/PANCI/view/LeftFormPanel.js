 var required = '<span class="requiredFld" data-qtip="Required">*</span>';



  Ext.define('Left.view.LeftFormPanel' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.LeftFormPanel',
	

		frame: true,
			width: 550,
			height: 550,
			bodyPadding: 10,
			border: true,

			fieldDefaults: {
				labelWidth: 130,
				labelAlign: 'left'
			},

				items: [{
				name: 'Phone1',
				itemId: 'Phone1',
				xtype: 'textfield',
				fieldLabel: 'Phone1',
				allowBlank: true
			},{
				name: 'Fax',
				itemId: 'Fax',
				xtype: 'textfield',
				fieldLabel: 'Fax',
				allowBlank: true
			},{
				name: 'Website',
				itemId: 'Website',
				xtype: 'textfield',
				fieldLabel: 'Website',
				allowBlank: true
			}],
			buttons: [
				{
					text: 'Previous Booking',
					handler: function() {
						Ext.MessageBox.alert('Thank you!', 'Cancel');
					}
				}			]
	

});
		
