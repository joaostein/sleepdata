angular.module('sleepData', [])
  .controller('mainController', function ($scope) {

  })
  .directive('ngVisualization', function (D3Service) {
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, element, attrs) {
        var svg = D3Service.createSvg(960, 600, element[0]);
        var elements = svg.append('g').selectAll('texts').data(data);
        elements.enter().append('circle').attr({
          r: function (data, index) {
            console.log(data);
          }
        });
      }
    }
  })