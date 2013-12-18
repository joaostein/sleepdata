var createScatter = function (sleepData) {
    var chart;
    nv.addGraph(function() {
      chart = nv.models.scatterChart()
      .options({
        transitionDuration: 300,
        showDistX: true,
        showDistY: true,
        useVoronoi: true
      });

      chart.xAxis
        .axisLabel("Time (h)")
        .tickFormat(d3.format('0d'));

      chart.yAxis
        .axisLabel('Quality (%)')

      d3.select('#chart3 svg')
        .datum(window.getData())
        .call(chart);

      nv.utils.windowResize(chart.update);
      chart.dispatch.on('stateChange', function(e) { ('New State:', JSON.stringify(e)); });
      return chart;
  });
};