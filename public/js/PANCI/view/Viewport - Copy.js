Ext.define('Booking.view.Viewport', {
     extend: 'Ext.container.Viewport',
     layout: 'fit',
     items:[{
          xtype:'panel',
          
          
          items:[{
               xtype:'BookingFormPanel'
               
          }]
     }]
});