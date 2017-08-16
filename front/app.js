'use strict';

angular.module('App',
                [ 'ngRoute',
                  'LandingModule',
                  'todoListModule'])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .when('/todo-list', {
      templateUrl: 'html/todoList.html',
      controller: 'todoListController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
