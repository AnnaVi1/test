app.factory('tasks',function(){
   var tasks = [
        {
            title: 'Learn',
            done: true,
        },
        {
            title: 'Learn Angular',
            done: false,
        }
    ];
    
    var get = function(){
        return  tasks;
    };
    
    var add = function(title){
        tasks.push({
            title: title,
            done: false,
        });
    };
    
    return{
        get: get,
        add: add,
    }
    
});