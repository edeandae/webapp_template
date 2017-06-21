'use strict';

angular.module('App',
                [ 'ngRoute',
                  'LandingModule'])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
