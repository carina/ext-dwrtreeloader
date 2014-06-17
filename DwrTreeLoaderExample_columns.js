Ext.BLANK_IMAGE_URL = '../../resources/images/default/s.gif';


Ext.onReady(function () {
    var tree = new Ext.tree.TreePanel({
        el:'tree-ct',
        width:552,
        autoHeight:true,
        rootVisible:true,
        autoScroll:true,
        title:'Example Tasks',
        columns:[
            {
                header:'Task',
                width:350,
                dataIndex:'task'
            },
            {
                header:'Duration',
                width:100,
                dataIndex:'duration'
            },
            {
                header:'Assigned To',
                width:100,
                dataIndex:'user'
            }
        ],
        loader:new Ext.ux.DWRTreeLoader({
            uiProviders:{
                'col':Ext.tree.ColumnNodeUI
            },
            dwrCall:MyFakeTaskService.getNodes
        }),

        root:new Ext.tree.AsyncTreeNode({
            text:'Tasks',
            id:-1,   //you could use a constant here or whatever fits best for your application
            hasChildren:true,
            leaf:false
        })
    });
    tree.render();
});