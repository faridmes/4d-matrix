(function() {
    'use strict';

    angular.module('4d-matrix.matrix')
        .controller('matrixController', MatrixController);

    function MatrixController() {
        var vm = this;

        vm.hello = 'hello';
    }

}());
