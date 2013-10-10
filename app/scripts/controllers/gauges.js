'use strict';

angular.module('gsUiKsApp')
    .controller('GaugesCtrl', ['$scope', function ($scope) {

        $scope.gauge = {
            sensitivity: 8,
            val: 20,
            themes: {
                fire: {
                    background: ['lightyellow', 'yellow'],
                    basis: ['orange', 'red'],
                    tick: 'red',
                    // this is a dirty, dirty hack to set transparent values - we should allow setting 'none'
                    dial: ['', '', '', '', ''],
                    pointer: ['red', 'orange', 'lightyellow'],
                    border: 'orange'
                },
                grayscale: {
                    background: ['white', 'white'],
                    basis: ['#fff', '#aaa'],
                    tick: 'black',
                    dial: ['white', 'white', 'white', 'white', 'white'],
                    pointer: ['lightgray', 'gray', 'gray'],
                    border: 'white'
                },
                sky: {
                    background: ['#edf7fc', '#edf7fc'],
                    basis: ['#6098bf', '#5086ab'],
                    tick: '#0a66a3',
                    dial: ['lightblue', 'lightblue', 'lightblue', '#6098bf', '#6098bf'],
                    pointer: ['#007cbf', '#6098bf', '#edf7fc'],
                    border: '#007cbf'
                }
            }
        };

        $scope.themeReplacer = function (k, v) {
            if (k === 'fire' || k === 'grayscale') {
                return undefined;
            }
            return v;
        };

        $scope.tabs = [
            // TODO is there a better way to get source code (perhaps $http or $resource)?
            {
                title: $scope.tabsMeta.html.title,
                content: '<gs-gauge sensitivity="gauge.sensitivity" val="gauge.val" colors="gauge.themes.sky"></gs-gauge>'
            },
            {
                title: $scope.tabsMeta.javascript.title,
                content: '$scope.gauge = ' + JSON.stringify($scope.gauge, $scope.themeReplacer, 2)
            }
        ];
    }]);
