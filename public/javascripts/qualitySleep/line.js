var createLineGraph = function (data) {
  var chart;
  nv.addGraph(function() {
    chart = nv.models.lineChart()
    .options({
      margin: {left: 100, bottom: 100},
      x: function (d,i) {
        if (d.x < 1) {
          return 0;
        }
        return parseInt(d.x);
      },
      showXAxis: true,
      showYAxis: true,
      transitionDuration: 250,
    });

    chart.xAxis
      .axisLabel("Time (h)")

    chart.yAxis
      .axisLabel('Quality (%)')

    d3.select('#chart1 svg')
      .attr('perserveAspectRatio', 'xMinYMid')
      .datum([{
        area: true,
        values: data,
        key: "Data",
        color: "#ff7f0e"
      }])
      .call(chart);

    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
  });
};

