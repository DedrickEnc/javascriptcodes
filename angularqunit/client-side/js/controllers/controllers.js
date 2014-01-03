/*Dedrick v0.0.1 - Friday, January 3rd, 2014, 11:28:44 AM */
angular.module('test.controllers', []);

//src: client-side/vues/bool/bool.js
angular.module('test.controllers')
.controller('boolController', function($scope) {

  var estpaire = function(nombre){
    return nombre%2==0;
  }
  
});

//src: client-side/vues/somme/somme.js
angular.module('test.controllers')
.controller('sommeController', function($scope) {

  var somme = function(x1, x2){
    return x1+x2;
  }
  
});
