(function () {
    'use strict';

    angular.module('4d-matrix.matrix')
        .controller('matrixController', MatrixController);

    MatrixController.$inject = ['matrixListsService'];

    function MatrixController(matrixListsService) {
        var vm = this;

        vm.doList = matrixListsService.getDoList();
        vm.delegateList = matrixListsService.getDelegateList();
        vm.decideList = matrixListsService.getDecideList();
        vm.deleteList = matrixListsService.getDeleteList();
        vm.task = {
            description: '',
            category: ''
        };

        vm.addTask = function () {
            var newTask = angular.copy(vm.task);

            matrixListsService.addTask(newTask);

            vm.task.description = '';
            vm.task.category = '';
            vm.taskForm.$setPristine();
        };
    }
}());
