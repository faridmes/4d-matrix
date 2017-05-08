(function () {
    'use strict';

    angular.module('4d-matrix.matrix')
        .controller('matrixController', MatrixController);

    MatrixController.$inject = ['matrixListsService'];

    function MatrixController(matrixListsService) {
        var vm = this;

        vm.removeTask = removeTask;
        vm.addTask = addTask;

        vm.doList = matrixListsService.getDoList();
        vm.delegateList = matrixListsService.getDelegateList();
        vm.decideList = matrixListsService.getDecideList();
        vm.deleteList = matrixListsService.getDeleteList();
        vm.task = {
            description: '',
            category: ''
        };

        function addTask () {
            var newTask = angular.copy(vm.task);
            matrixListsService.addTask(newTask);
            vm.task.description = '';
            vm.task.category = '';
            vm.taskForm.$setPristine();
        };

        function removeTask(index, category) {
            matrixListsService.removeTask(index, category);
        }
    }
}());
