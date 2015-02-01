 var required = '<span class="requiredFld" data-qtip="Required">*</span>';
		
  Ext.define('Booking.view.BookingFormPanel' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.BookingFormPanel',
	

		frame: true,
			width: 550,
			height: 700,
			bodyPadding: 10,
			border: true,
			
			fieldDefaults: {
				labelWidth: 130,
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
			},{
				name: 'Selectjobtype',
				itemId: 'selectjobtype',
				xtype: 'textfield',
				fieldLabel: 'Select Job Type',
				allowBlank: true
			},{
				name: 'Howdidtheyfindus',
				itemId: 'Howdidtheyfindus',
				xtype: 'textfield',
				fieldLabel: 'How did they find us',
				allowBlank: true
			},{
				name: 'contactedthrough',
				itemId: 'contactedthrough',
				xtype: 'textfield',
				fieldLabel: 'Contacted through',
				allowBlank: true
			},{
				name: 'wantedculture',
				itemId: 'wantedculture',
				xtype: 'textfield',
				fieldLabel: 'Wanted culture',
				allowBlank: true
			},{
				name: 'wantedperformance',
				itemId: 'wantedperformance',
				xtype: 'textfield',
				fieldLabel: 'Wanted Performance',
				allowBlank: true
			},{
				name: 'amountofstudents',
				itemId: 'amountofstudents',
				xtype: 'textfield',
				fieldLabel: 'Amount of Students',
				allowBlank: true
			},{
				name: 'wantedlanguages',
				itemId: 'wantedlanguages',
				xtype: 'textfield',
				fieldLabel: 'Wanted Languages',
				allowBlank: true
			},{
				name: 'preferreddateandtime',
				itemId: 'preferreddateandtime',
				xtype: 'textfield',
				fieldLabel: 'Preferred date and time',
				allowBlank: true
			},{
				name: 'possibleartistforclient',
				itemId: 'possibleartistforclient',
				xtype: 'textfield',
				fieldLabel: 'Possible Artist for cleint',
				allowBlank: true
			},{
				name: 'artistinformation',
				itemId: 'artistinformation',
				xtype: 'textfield',
				fieldLabel: 'Artist information',
				allowBlank: true
			},{
				name: 'ArtistName',
				itemId: 'ArtistName',
				xtype: 'textfield',
				fieldLabel: 'Artist Name',
				allowBlank: true
			},{
				name: 'Artistculture',
				itemId: 'artistculture',
				xtype: 'textfield',
				fieldLabel: 'Culture',
				allowBlank: true
			},{
				name: 'Typeofperformance',
				itemId: 'Typeofperformance',
				xtype: 'textfield',
				fieldLabel: 'Type of performance',
				allowBlank: true
			},{
				name: 'Travelcosts',
				itemId: 'Travelcosts',
				xtype: 'textfield',
				fieldLabel: 'Travel costs',
				allowBlank: true
			},{
				name: 'Technicalrequirement',
				itemId: 'Technicalrequirement',
				xtype: 'textfield',
				fieldLabel: 'Technical requirement',
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
		
