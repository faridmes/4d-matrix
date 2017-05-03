(function () {
    'use strict';

    angular.module('4d-matrix.matrix')
        .controller('matrixController', MatrixController);

    function MatrixController() {
        var vm = this;

        vm.doList = [];
        vm.delegateList = [];
        vm.decideList = [];
        vm.deleteList = [];
        vm.newTask = '';
        vm.category = '';

        vm.addTask = function () {
            switch (vm.category) {
                case 'do':
                    vm.doList.push(vm.newTask);
                    break;
                case 'delegate':
                    vm.delegateList.push(vm.newTask);
                    break;
                case 'decide':
                    vm.decideList.push(vm.newTask);
                    break;
                case 'delete':
                    vm.deleteList.push(vm.newTask);
                    break;
                default:
            }
        }
    }

}());
