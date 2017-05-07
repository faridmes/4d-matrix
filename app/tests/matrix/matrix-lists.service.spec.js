(function () {
    'use strict';

    describe('Matrix lists service', function () {

        var matrixListsService;

        beforeEach(function () {
            module('4d-matrix.matrix');

            inject(function ($injector) {
                matrixListsService = $injector.get('matrixListsService');
            })
        });

        it('should add a task to the doList', function () {
            var task = {
                description: 'A task',
                category: 'do'
            };

            matrixListsService.addTask(task);

            expect(matrixListsService.getDoList().length).toEqual(1);
            expect(matrixListsService.getDoList()).toContain(task);
        });

        it('should add two tasks to the delegateList', function () {
            var task = {
                description: 'A task',
                category: 'delegate'
            };

            var anotherTask = {
                description: 'Another task',
                category: 'delegate'
            };

            matrixListsService.addTask(task);
            matrixListsService.addTask(anotherTask);

            expect(matrixListsService.getDelegateList().length).toEqual(2);
            expect(matrixListsService.getDelegateList()).toContain(task);
            expect(matrixListsService.getDelegateList()).toContain(anotherTask);
        });

        it('should return an empty decideList when no task is added', function () {
            expect(matrixListsService.getDecideList().length).toEqual(0);
        });

        it('should add a task to the doList', function () {
            var task = {
                description: 'A task',
                category: 'delete'
            };

            matrixListsService.addTask(task);

            expect(matrixListsService.getDeleteList().length).toEqual(1);
            expect(matrixListsService.getDeleteList()).toContain(task);
        });

    });
}());