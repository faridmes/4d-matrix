(function() {
    'use strict';

    describe('Matrix controller', function () {

        beforeEach(module('4d-matrix.matrix'));

        var matrixController;
        var matrixListsServiceMock;

        beforeEach(inject(function(_$controller_){
            var $controller = _$controller_;
            matrixListsServiceMock = createMatrixListsServiceMock();

            matrixController = $controller('matrixController', {matrixListsService: matrixListsServiceMock});
        }));

        it('should contains 4 lists filled by the service', function() {
            expect(matrixController.doList.length).toEqual(1);
            expect(matrixController.delegateList.length).toEqual(0);
            expect(matrixController.decideList.length).toEqual(2);
            expect(matrixController.deleteList.length).toEqual(0);
        });

        it('should tell the service to add a task and reset the form', function() {
            matrixController.taskForm = {
                $setPristine: function () {}
            };

            spyOn(matrixListsServiceMock, 'addTask');
            spyOn(matrixController.taskForm, '$setPristine');

            matrixController.addTask();

            expect(matrixController.task.description).toEqual('');
            expect(matrixController.task.category).toEqual('');
            expect(matrixListsServiceMock.addTask).toHaveBeenCalledWith(jasmine.any(Object));
            expect(matrixController.taskForm.$setPristine).toHaveBeenCalled();
        });

        it('should tell the service to remove a task from a list', function() {
            spyOn(matrixListsServiceMock, 'removeTask');

            matrixController.removeTask(0, 'decide');

            expect(matrixListsServiceMock.removeTask).toHaveBeenCalledWith(0, 'decide');
        });

        function createMatrixListsServiceMock() {
            return {
                addTask: function() {

                }, getDoList: function() {
                    return [{description: 'A task'}];
                }, getDelegateList: function() {
                    return [];
                }, getDecideList: function() {
                    return [{description: 'A task'}, {description: 'A task'}];
                }, getDeleteList: function() {
                    return [];
                }, removeTask: function(index, category) {

                }
            };
        }

    });
}());