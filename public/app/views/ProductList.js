app.views.ProductList = new Ext.Panel ( {
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
    items: [{
        xtype: 'list',
        store: app.stores.products,
        itemTpl: '<div class="contact"><strong>{title}</strong> {description}</div>',
        layout: 'fit',
        html: "<p>Sencha Touch's <b>EventRecorder</b> and <b>EventSimulator</b> allow you to capture, \n\
       store and later playback all the touch events fired on the device's screen.</p>\n\
       <p>This opens up the possibility for automated UI and functional testing, or something\n\
       cool like live demostration of how your app works without the need of any pre-recorded videos.</p>\n\
       <p>Close this dialog and tap on the <b>\"Show Me!\"</b> button to see it in action. A demo series of events \n\
          (technically an array of serialized events in JSON format) will be replayed live on the screen.</p>\n\
       <p>To try it yourself, follow the steps below:\n\
        <ul>\n\
        <li>Show the Simulator Toolbar by tapping on the <b>\"Enable Simulator\"</b> button</li>\n\
        <li>Tap on the <b>\"Start\"</b> button to start recording events.</li>\n\
        <li>Interact with the app in any way you like, then tap on the <b>\"Stop\"</b> button to stop recording.</li>\n\
        <li>Tap on the <b>\"Playback\"</b> button and enjoy watching!.</li>\n\
        <li>Remember to tap on the <b>\"Erase\"</b> button before tapping on <b>\"Start\"</b> again if you want to start a new session.\n\
            Otherwise it will resume recording from where it was left off.</li>\n\
       </ul></p>"
    }]
});