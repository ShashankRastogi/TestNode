Ext.define('Schoolinfo.view.Viewport', {
     extend: 'Ext.container.Viewport',
     layout: 'fit',
     items:[{
          xtype:'panel',
          
          
          items:[{
               xtype:'SchoolinfoFormPanel'
               
          }]
     }]
});