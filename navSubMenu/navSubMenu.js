angular.module('goCardless')
    .directive('navSub',
    function() {
        return {
            restrict: 'AE',
            templateUrl: 'components/navSubMenu/navSubMenu.html',
            controller: 'navSubMenuController',
            controllerAs: 'ctrl'
        };
    })
    .controller('navSubMenuController',function(){
        var me = this;
        me.config={
            active: false,
            toggle:['Active','Pending','Inactive']
            };
    });