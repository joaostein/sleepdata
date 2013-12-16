angular.module('sleepData', [])
  .controller('mainController', function ($scope) {

  })
  .directive('ngVisualization', function (D3Service) {
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, element, attrs) {

      }
    }
  })