var createLineGraph = function (sleepData) {
  var chart;
  nv.addGraph(function() {
    chart = nv.models.lineChart()
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
      x: function (d,i) {
        return d.x;
      },
      transitionDuration: 250,
    });

    chart.xAxis
      .axisLabel("Time (h)")
      .tickFormat(d3.format('0d'));

    chart.yAxis
      .axisLabel('Quality (%)')

    d3.select('#chart1 svg')
      .datum([{
        area: true,
        values: sleepData,
        key: "Data",
        color: "#ff7f0e"
      }])
      .call(chart);

    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
  });
};

