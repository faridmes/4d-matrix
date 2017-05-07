(function() {
    'use strict';

    angular.module('4d-matrix')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider.state({
                name: 'matrix',
                url: '/matrix',
                templateUrl: 'app/matrix/matrix.html',
                controller: 'matrixController',
                controllerAs: 'matrix'
            });

            $urlRouterProvider.otherwise('/matrix');
        });
}());