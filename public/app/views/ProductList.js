app.views.ProductList = new Ext.Panel ( {
        items: [{

            xtype: 'list',
            store:  app.stores.products,
            itemTpl: '<div class="contact"><strong>{title}</strong></div>',
            grouped: true,
            indexBar: true

        }],
        layout: 'fit',
        listeners:{
            activate : function(){
                app.stores.products.load();
        }
      }
});