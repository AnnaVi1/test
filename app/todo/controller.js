app.controller('main',main);

function main($scope,$rootScope, tasks){
  //  $scope.message = 'Hello Word!';
    $scope.header = 'ToDo list';
    
    $scope.updateTasks = function(){   
        
        if(!!$scope.newTaskName)
        tasks.add($scope.newTaskName);
    };
    $scope.tasks = tasks.get();
    
    
//    $scope.updateTasks = function(){
//        console.log($scope.newTaskName);
//        if(!!$scope.newTaskName)
//        $scope.tasks.push({
//            title: $scope.newTaskName,
//            done: false,
//        });
//    };
//    
//    $scope.tasks = [
//        {
//            title: 'Learn',
//            done: true,
//        },
//        {
//            title: 'Learn Angular',
//            done: false,
//        }
//    ];
    
//    $scope.tasksToDo = function(){
//        return $scope.tasks.filter(function(task){
//            return !task.done;
//        }).length;
//    }

    
};