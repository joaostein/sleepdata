var createHistoricalBarChart = function (sleepData) {
  var chart;
  nv.addGraph(function() {
    chart = nv.models.historicalBarChart()
    .options({
      margin: {
        left: 100,
        bottom: 100,
      },
      showLegend: true,
      tooltipContent: function (key, y, e, graph) {
        var hour = String(graph.point.x).split('.')[0];
        var min = graph.point.minutes;
        return e + '% when sleeping ' + hour + 'h' + min + 'm';
      },
      x: function (d, i) {
        return d.x;
      },
      transitionDuration: 250
    });

    chart.xAxis
      .axisLabel("Time (h)")

    chart.yAxis
      .axisLabel('Quality (%)')

    d3.select('#chart2 svg')
      .datum([{
        values: sleepData,
        key: "2013",
        color: "#ff7f0e"
      }])
      .call(chart);

    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
  });
};