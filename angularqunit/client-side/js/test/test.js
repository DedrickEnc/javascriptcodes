var injector = angular.injector(['ng', 'test']);

var init = {
    setup: function() {
        this.$scope = injector.get('$rootScope').$new();
        this.$controller = injector.get('$controller')('sommeController', {$scope: this.$scope});
    }
};

module('testModule', init);

test('Controlleur', function() {
    equal(this.$scope.donne(),"maman", 'le test');
});