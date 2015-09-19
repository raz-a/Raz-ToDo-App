// Code goes here

var myApp = angular.module('app', ["xeditable"]);

myApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

myApp.controller('MainCtrl', function ($scope){

  $scope.PriorityEnum = 
  {
    LOW: "Low",
    NORMAL: "Normal",
    HIGH: "High"
  };

  $scope.todos = 
  [
    {
      task      : "Learn Angular",
      complete  : false,
      priority  : $scope.PriorityEnum.NORMAL
    },
    
    {
      task      : "Make a TODO list",
      complete  : true,
      priority  : $scope.PriorityEnum.HIGH
    }
  ];
  
  $scope.totalTasks = $scope.todos.length;
  
  $scope.newItem = "";
  $scope.newPriority = $scope.PriorityEnum.NORMAL;
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push(
        {
          task      : $scope.newItem,
          complete  : false,
          priority  : $scope.newPriority
        });
      $scope.newItem = "";
      $scope.newPriority = $scope.PriorityEnum.NORMAL;
      $scope.totalTasks++;
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.totalTasks--;
  }
  
  $scope.enterPress = function(keyEvent) 
  {
	  if(keyEvent.which === 13)
    {
		  $scope.addItem();
	  }
  }
    
  $scope.removeCompleteItems = function()
  {    
    for (var i = $scope.todos.length-1; i >= 0; i--)
    {
        if($scope.todos[i].complete === true)
        {
            $scope.deleteItem($scope.todos[i]);
        }
    }
  }
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/