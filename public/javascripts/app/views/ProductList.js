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
                    iconCls: 'add',
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
                    },
                    items: [{
                        xtype: 'formpanel',
                        id: 'basicform',
                        scroll: 'vertical',
                        items: [{
                            xtype: 'fieldset',
                            title: 'Product Info',
                            instructions: 'Please enter the information above.',
                            defaults: {
                                // labelAlign: 'right'
                                labelWidth: '35%'
                            },
                            items: [{
                                xtype: 'textfield',
                                name: 'title',
                                label: 'Title',
                                required: true,
                                useClearIcon: true
                            }, {
                                xtype: 'textfield',
                                name: 'description',
                                label: 'description',
                                required: true,
                                useClearIcon: true
                            }, {
                                xtype: 'numberfield',
                                name: 'price',
                                label: 'price',
                                value: '0',                            
                                required: true,
                                useClearIcon: true
                            }]
                        }],
                        dockedItems: [{
                            dock: 'top',
                            xtype: 'toolbar',
                            items: [{
                                    xtype: 'spacer'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Add',
                                    ui: 'action',
                                    scope: this,
                                    handler: function() {
                                        var form = Ext.getCmp('basicform');
                                        record = Ext.ModelMgr.create(form.getValues(), 'app.models.Product');
                                        app.stores.products.add(record);
                                        app.stores.products.sync();
                                    }
                                }
                            ]
                        }]
                    }]
                }
        ],
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