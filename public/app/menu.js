app.menu = [{
            text: 'Products',
            cls: 'Launchscreen',
            items: 
                [{
                    text: 'List',
                    card: app.views.ProductList,
                    source: 'app/views/ProductList.js',
                    leaf: true
                }]
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
        
app.menuStore = new Ext.data.TreeStore({
    model: 'Menu',
    root: {
        items: app.menu
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});