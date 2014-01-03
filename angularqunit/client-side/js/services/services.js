
(function (angular) {

  'use strict';
    
  var services = angular.module('test.services', []);    

  services.service('testEssaie', function() { 

    this.ditBonjour = function(dateString) {
      return "bonjour";
    };    

    this.sup = function(nombre1, nombre2) {
      return nombre1>nombre2;
    }

  }); 

})(angular);
