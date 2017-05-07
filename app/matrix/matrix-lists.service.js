(function () {
    'use strict';

    angular.module('4d-matrix.matrix')
        .service('matrixListsService', MatrixListsService);

    function MatrixListsService() {
        var service = this;

        var doList = [];
        var delegateList = [];
        var decideList = [];
        var deleteList = [];

        service.addTask = function (task) {
            switch (task.category) {
                case 'do':
                    doList.push(task);
                    break;
                case 'delegate':
                    delegateList.push(task);
                    break;
                case 'decide':
                    decideList.push(task);
                    break;
                case 'delete':
                    deleteList.push(task);
                    break;
                default:
            }
        };

        service.getDoList = function () {
            return doList;
        };

        service.getDelegateList = function () {
            return delegateList;
        };

        service.getDecideList = function () {
            return decideList;
        };

        service.getDeleteList = function () {
            return deleteList;
        };
    }
}());
