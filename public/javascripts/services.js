angular.module('sleepData')
  .factory('D3Service', function () {
    var service = {
      createSvg: function (width, height, element) {
        var svg = d3.select(element).append('svg').attr({
          'width': width,
          'height': height
        });

        return svg;
      }
    };

    return service;
  })