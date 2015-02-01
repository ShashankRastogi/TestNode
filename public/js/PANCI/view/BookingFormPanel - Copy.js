 var required = '<span class="requiredFld" data-qtip="Required">*</span>';
		
  Ext.define('Booking.view.BookingFormPanel' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.BookingFormPanel',
	
			frame: true,
			width: 550,
			height: 300,
			bodyPadding: 10,
			border: true,
			
			fieldDefaults: {
				labelWidth: 110,
				labelAlign: 'left'
			},
			
			items: [{
				name: 'Name',
				itemId: 'schoolName',
				xtype: 'textfield',
				fieldLabel: 'Name',
				afterLabelTextTpl: required,
				allowBlank: false
			}, {
				name: 'schooladdress',
				itemId: 'schooladdress',
				xtype: 'textfield',
				fieldLabel: 'Address',
				afterLabelTextTpl: required,
				allowBlank: false
			},{
				name: 'schoolPhone',
				itemId: 'schoolPhone',
				xtype: 'textfield',
				fieldLabel: 'Phone',
				allowBlank: true
			},{
				name: 'schoolemail',
				itemId: 'schoolemail',
				xtype: 'textfield',
				fieldLabel: 'Email',
				allowBlank: true
			},{
				name: 'schoolWebsite',
				itemId: 'schoolWebsite',
				xtype: 'textfield',
				fieldLabel: 'Website',
				allowBlank: true
			},{
				name: 'contactperson',
				itemId: 'contactperson',
				xtype: 'textfield',
				fieldLabel: 'Contact Person',
				allowBlank: true
			},{
				name: 'contactname',
				itemId: 'contactname',
				xtype: 'textfield',
				fieldLabel: 'Name',
				allowBlank: true
			},{
				name: 'contactPhone',
				itemId: 'contactPhone',
				xtype: 'textfield',
				fieldLabel: 'Phone',
				allowBlank: true
			},{
				name: 'contactemail',
				itemId: 'contactemail',
				xtype: 'textfield',
				fieldLabel: 'Email',
				allowBlank: true
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
		
