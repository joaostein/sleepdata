d3.csv("javascripts/data.csv", function(error, row) {
  var data = [];
  row.forEach(function(d) {
    var night = {};
    night.x = d['Time in bed'].split(':').join('.');
    night.y = d['Sleep quality'].split('%')[0];
    data.push(night);
  });

  createGrapth(data);
});


var createGrapth = function (data) {
  var smallData = data
  smallData.sort(function compare(a, b) {
    var x1 = Math.round(parseFloat(a.x)*100)/100;
    var x2 = Math.round(parseFloat(b.x)*100)/100;
    if (x1 < x2)
      return -1;
    if (x1 > x2)
      return 1;
    return 0;
  });


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
      .axisLabel("Hours of sleep")

    chart.yAxis
      .axisLabel('Quality (%)')

    d3.select('#chart1 svg')
      .attr('perserveAspectRatio', 'xMinYMid')
      .datum([{
        area: true,
        values: smallData,
        key: "Data",
        color: "#ff7f0e"
      }])
      .call(chart);

    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
  });
};

