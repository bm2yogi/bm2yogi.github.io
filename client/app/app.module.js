(function () {
    'use strict';

    angular
        .module('app', [])
        .controller('ContactController', controller);

    function controller(){
        var vm = this;

        vm.save = function(){
            console.log('saving');
        }
    }
})();