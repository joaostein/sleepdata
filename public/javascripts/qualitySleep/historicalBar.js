var createHistoricalBarChat = function (data) {
  var chart;
  nv.addGraph(function() {
    chart = nv.models.historicalBarChart();
    chart
      .margin({left: 100, bottom: 100})
      .x(function(d,i) {
        return d.x;
      })
      .transitionDuration(250);

    chart.xAxis
      .axisLabel("Time (h.min)")

    chart.yAxis
      .axisLabel('Quality (%)')

    chart.showXAxis(true);

    d3.select('#chart2 svg')
      .datum([
        {
          values: data,
          key: "Sleep Quality vs Sleep Time",
          color: "#ff7f0e"
        }
      ])
      .call(chart);

    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
  });
};