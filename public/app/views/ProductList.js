app.views.ProductList = new Ext.Panel ( {
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        flex: 1
    },    
    items: [{
        xtype: 'list',
        store: app.stores.products,
        itemTpl: '<tpl for=".">{name} {email}</tpl>'
    }]
});