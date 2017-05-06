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
        vm.task = {
            description: '',
            category: ''
        };

        vm.addTask = function () {
            switch (vm.task.category) {
                case 'do':
                    vm.doList.push(vm.task);
                    break;
                case 'delegate':
                    vm.delegateList.push(vm.task);
                    break;
                case 'decide':
                    vm.decideList.push(vm.task);
                    break;
                case 'delete':
                    vm.deleteList.push(vm.task);
                    break;
                default:
            }
        };
    }
}());
