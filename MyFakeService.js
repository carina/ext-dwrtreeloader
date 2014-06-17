var MyFakeService = function () {
    return{
        getNodes:function (parentNodeId, callParams) {
            var children = [];
            if (parentNodeId == -1) {
                children = [
                    {
                        id:'1',
                        text:'My first node',
                        leaf:false
                    },
                    {
                        id:'2',
                        text:'Second node',
                        leaf:false
                    },
                    {
                        id:'3',
                        text:'Third node',
                        leaf:false
                    },
                    {
                        id:'4',
                        text:'Node without children',
                        leaf:true
                    },
                    {
                        id:'5',
                        text:'Yet another node',
                        leaf:false
                    }
                ];
            } else {

                var count = 1 + Math.floor(Math.random() * 6);
                for (var i = 0; i < count; i++) {
                    children.push({
                        id:parentNodeId + '_subNode_' + i,
                        text:'Child node ' + i,
                        leaf:i % 2 == 0
                    });
                }
            }

            callParams.callback.call(this, children);
        }
    };
}();


/*

 var MyFakeService = function() {
 return{
 getNodes : function(parentNodeId, callParams) {
 var children = [];
 if (parentNodeId == -1) {
 children = [{
 id:'1',
 text:'Animals',
 hasChildren: true,
 leaf:false
 },
 {
 id:'2',
 text:'Cities',
 hasChildren: true,
 leaf:false
 },
 {
 id:'3',
 text:'Sushi',
 hasChildren: true,
 leaf:false
 },
 {
 id:'4',
 text:'Node without children',
 hasChildren: false,
 leaf:false
 },
 {
 id:'5',
 text:'Yet another node',
 hasChildren: true,
 leaf:false
 }
 ];
 } else {

 var count = 1 + Math.floor(Math.random()*6);
 for (var i = 0; i<count; i++) {
 children.push({
 id:parentNodeId + '_subNode',
 text:'Child node ' + i,
 leaf:false,
 hasChildren: i%2 == 0
 });
 }
 }

 callParams.callback.call(this, children);
 }
 };
 }();

 */