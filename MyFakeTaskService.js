var MyFakeTaskService = function () {
    return{
        getNodes:function (parentNodeId, callParams) {
            var children = [];
            if (parentNodeId == -1) {
                children = [
                    {
                        task:'WTF Item',
                        duration:'3 hours',
                        user:'',
                        uiProvider:'col',
                        cls:'master-task',
                        iconCls:'task-folder'
                    },
                    {
                        task:'ColumnTree Example',
                        duration:'3 hours',
                        user:'',
                        uiProvider:'col',
                        cls:'master-task',
                        iconCls:'task-folder'
                    }
                ];
            } else {

                var count = 2 + Math.floor(Math.random() * 6);
                for (var i = 1; i < count; i++) {
                    children.push({
                        id:parentNodeId + '_subNode_' + i,
                        task:'Sub task ' + i,
                        duration:i * 10 + ' min',
                        user:'Jack Slocum',
                        uiProvider:'col',
                        leaf:true,
                        iconCls:'task'
                    });
                }
            }

            callParams.callback.call(this, children);
        }
    };
}();