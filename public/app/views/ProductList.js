app.views.ProductList = new Ext.Panel ( {
        items: [{

            xtype: 'list',
            store:  app.stores.products,
            itemTpl: '<div class="contact"><strong>{title}</strong></div>',
            grouped: true,
            indexBar: true,
            plugins: [{
                ptype: 'pullrefresh'
            }],

        }],
        layout: 'fit',
        listeners:{
            activate : function(){
                app.stores.products.load();
            }
        },dockedItems: [{
        xtype: 'toolbar',
        ui: 'light',
        dock: 'bottom',
        defaults: {
            iconMask: true,
            ui: 'plain'
        },
        scroll: {
            direction: 'horizontal',
            useIndicators: false
        },
        layout: {
            pack: 'center'
        },
        items: [
            {
            iconCls: 'list'
            },
            {
                iconCls: 'add',
                handler: function() {
                    console.log('lets add');
                }
            }]
        }]
});