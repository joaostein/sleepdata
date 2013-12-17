var chart;

nv.addGraph(function() {
  chart = nv.models.lineChart()
  .options({
    margin: {left: 100, bottom: 100},
    x: function(d,i) {
      return d.x;
    },
    showXAxis: true,
    showYAxis: true,
    transitionDuration: 250
  });

  chart.xAxis
    .axisLabel("Hours of sleep")

  chart.yAxis
    .axisLabel('Quality (%)')

  d3.select('#chart1 svg')
    .datum([{
      area: true,
      values: [
        { x: 3, y: 34 },
        { x: 4, y: 56 },
        { x: 6, y: 66 },
        { x: 6, y: 74 },
        { x: 6, y: 75 },
        { x: 8, y: 80 },
        { x: 10, y: 95 },
      ],
      key: "Test",
      color: "#ff7f0e"
    }])
    .call(chart);

  nv.utils.windowResize(chart.update);
  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
  return chart;
});