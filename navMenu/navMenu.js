angular.module('goCardless')
    .directive('navMenu',
    function() {
        return {
            restrict: 'AE',
            templateUrl: 'components/navMenu/navMenu.html'
        };
    });