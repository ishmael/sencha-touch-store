menu = [{
            text: 'Products',
            card: app.views.ProductList,
            source: 'app/views/ProductList.js'
}];
        
Ext.regModel('Menu', {
    fields: [ 
        {name: 'text',        type: 'string'},
        {name: 'source',      type: 'string'},
        {name: 'preventHide', type: 'boolean'},
        {name: 'cardSwitchAnimation'},
        {name: 'card'}
    ]
});
        
app.stores.menuStore = new Ext.data.TreeStore({
    model: 'Menu',
    root: 
    {
        items: menu
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});