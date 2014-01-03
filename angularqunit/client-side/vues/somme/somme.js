angular.module('test.controllers')
.controller('sommeController', function($scope) {

	$scope.donne = function(){
		return "maman";
	}

	var somme = function(x1, x2){
		return x1+x2;
	}
  
});
