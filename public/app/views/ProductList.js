app.views.ProductList = new Ext.TabPanel ( {
    items: [{
        title: 'Simple',
        layout: Ext.is.Phone ? 'fit' : {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        cls: 'demo-list',
        items: [{
            width: Ext.is.Phone ? undefined : 300,
            height: 500,
            xtype: 'list',
            store:  app.stores.products,
            itemTpl: '<div class="contact"><strong>{title}</strong> {description}</div>'
        }]
    }]
});