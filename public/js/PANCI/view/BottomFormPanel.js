 var required = '<span class="requiredFld" data-qtip="Required">*</span>';



  Ext.define('Schoolinfo.view.SchoolinfoFormPanel' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.SchoolinfoFormPanel',
	

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
            			xtype: 'timefield',
            			fieldLabel: 'Time',
            			name: 'time',
            			minValue: '8:00am',
            			maxValue: '6:00pm'
        		},{
				name: 'Name',
				itemId: 'schoolName',
				xtype: 'textfield',
				fieldLabel: 'Name',
				afterLabelTextTpl: required,
				allowBlank: false
			}, {
				name: 'schooltype',
				itemId: 'schooltype',
				xtype: 'textfield',
				fieldLabel: 'Type',
				afterLabelTextTpl: required,
				allowBlank: false
			},{
				name: 'schoolCountry',
				itemId: 'schoolCountry',
				xtype: 'textfield',
				fieldLabel: 'Country',
				allowBlank: true
			},{
				name: 'schoolSttPrvReg',
				itemId: 'schoolSttPrvReg',
				xtype: 'textfield',
				fieldLabel: 'Stt/Prv/Reg',
				allowBlank: true
			},{
				name: 'schoolCity',
				itemId: 'schoolCity',
				xtype: 'textfield',
				fieldLabel: 'City/Town',
				allowBlank: true
			},{
				name: 'Street',
				itemId: 'Street',
				xtype: 'textfield',
				fieldLabel: 'Street',
				allowBlank: true
			},{
				name: 'Postcode',
				itemId: 'Postcode',
				xtype: 'textfield',
				fieldLabel: 'Postcode',
				allowBlank: true
			},
 			{ 
                                xtype: 'label', 
                    		name: 'ContactDetailforSchool', 
                    		id: 'label_id', 
                    		text: 'Contact detail for school', 
                    		cls: 'x-form-item-label x-form-item' 
                       	},
			{
				name: 'contactemail',
				itemId: 'contactemail',
				xtype:'textfield',
				fieldLabel: 'E-mail',
				allowBlank: true
			},{
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
		
