(function(angular) {
  'use strict';

  var test = angular.module('test', ['test.controllers', 'test.services']);
  
  function testconfig($routeProvider) { 
    $routeProvider.
    when('/somme', {
      controller: 'sommeController',
      templateUrl: 'vues/somme/somme.html'
    }).
    when('/bool', { 
      controller: 'boolController',
      templateUrl: 'vues/bool/bool.html'
    });
  }

  test.config(testconfig);
})(angular);
