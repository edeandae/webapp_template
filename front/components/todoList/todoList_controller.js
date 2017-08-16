angular.module('todoListModule', [])
.controller('todoListController', [
              '$scope',
function($scope) {

  $scope.todos = [{text:'eat sahdwish', done:false}
  ];
  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.todoText, done:false});
  }

  $scope.clear = function(){
    var newList = [];
    for(var index in $scope.todos){
      var todo = $scope.todos[index];
      if(!todo.done){
        newList.push(todo);
      }
    }
    $scope.todos = newList;
  };
    
  'use strict';
}]);
