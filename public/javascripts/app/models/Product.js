
app.models.Product = Ext.regModel("app.models.Product", {
    fields: [
        {name: "id", type: "int"},
        {name: "title", type: "string"},
        {name: "description", type: "string"}             
    ]
});


app.stores.products = new Ext.data.Store({
    storeId: "app.stores.products",
    model: "app.models.Product",
    sorters: 'title',    
    getGroupString : function(record) {
        return record.get('title')[0];
    },    
    proxy: {
        type: 'rest',
        url: '/products',
        format: 'json',
        appendId: false,
        reader: {
            type: 'json',
            root: 'data',
            record: 'product',
            totalProperty: 'total'
        },
        writer: {
            type: 'json',
            root: 'product'
        }
    } 
});
