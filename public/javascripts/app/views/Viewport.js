app.views.Viewport = Ext.extend(Ext.Panel, {
  fullscreen: true,
  layout:'card',

  initComponent: function() {
        


        this.navigationBar = new Ext.Toolbar({
            ui: 'dark',
            dock: 'top',
            title: this.title
        });

      this.navigationPanel = new Ext.NestedList({
          
            useToolbar: Ext.is.Phone ? false : true,
            updateTitleText: false,
            store: app.stores.menuStore,
            dock: 'left',
            hidden: !Ext.is.Phone && Ext.Viewport.orientation == 'portrait',
            toolbar: Ext.is.Phone ? this.navigationBar : null
        });
      if (!Ext.is.Phone) {
            this.navigationPanel.setWidth(250);
        }
        this.dockedItems = this.dockedItems || [];
        this.dockedItems.unshift(this.navigationBar);
        
        if (!Ext.is.Phone && Ext.Viewport.orientation == 'landscape') {
            this.dockedItems.unshift(this.navigationPanel);
        }
        else if (Ext.is.Phone) {
            this.items = this.items || [];
            this.items.unshift(this.navigationPanel);
        }

        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});