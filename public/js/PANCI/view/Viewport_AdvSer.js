Ext.define('Advancedsearch.view.Viewport', {
     extend: 'Ext.container.Viewport',
     layout: 'fit',
     items:[{
          xtype:'panel',
          
          
          items:[{
               xtype:'AdvancedsearchFormPanel'
               
          }]
     }]
});