app.views.ProductList = new Ext.TabPanel ( {
        layout: 'fit',
        listeners:{
            activate : function(){
                app.stores.products.load();
            }
        },
        items: [
                {
                    title: 'Lista',
                    iconCls: 'list',
                        layout: 'fit',                    
                    items: [{
                        xtype: 'list',
                        store:  app.stores.products,
                        itemTpl: '<div class="contact"><strong>{title}</strong></div>',
                        grouped: true,
                        indexBar: true,
                        plugins: [{
                            ptype: 'pullrefresh'
                        }]
                    }]
                },
                {
                    title: 'adicionar',
                    iconCls: 'add',
                    handler: function() {
                        console.log('lets add');
                    }
        }],
        tabBar: {
            dock: 'bottom',
            scroll: {
            direction: 'horizontal',
            useIndicators: false
            },
            layout: {
                pack: 'center'
            }
        }
});