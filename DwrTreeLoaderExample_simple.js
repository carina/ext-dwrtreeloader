Ext.BLANK_IMAGE_URL = '../../resources/images/default/s.gif';

Ext.onReady(function () {
    var tree = new Ext.tree.TreePanel({
        el:'tree-ct',
        width:552,
        autoHeight:true,
        rootVisible:false,
        autoScroll:true,
        title:'Folders & Leaves',
        loader:new Ext.ux.DWRTreeLoader({
            dwrCall:MyFakeService.getNodes
        }),

        root:new Ext.tree.AsyncTreeNode({
            text:'Invisible root',
            hasChildren:true,
            id:-1   //you could use a constant here or whatever fits best for your application
        })
    });
    tree.render();
});