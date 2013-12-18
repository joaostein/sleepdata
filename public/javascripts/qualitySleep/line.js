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
      .datum([
        {
          values: sleepData[1],
          key: "January",
          color: "#ff7f0e",
          disabled: false
        },
        {
          values: sleepData[2],
          key: "February",
          color: "#2ca02c",
          disabled: true
        },
        {
          values: sleepData[3],
          key: "March",
          color: "#2222ff",
          disabled: true
        },
        {
          values: sleepData[4],
          key: "April",
          color: "#667711",
          disabled: true
        },
        {
          values: sleepData[5],
          key: "May",
          color: "#ff0000",
          disabled: true
        },
        {
          values: sleepData[6],
          key: "June",
          color: "#000000",
          disabled: true
        },
        {
          values: sleepData[7],
          key: "July",
          color: "#e4ff00",
          disabled: true
        },
        {
          values: sleepData[8],
          key: "August",
          color: "#f000ff",
          disabled: true
        },
        {
          values: sleepData[9],
          key: "September",
          color: "#00fffc",
          disabled: true
        },
        {
          values: sleepData[10],
          key: "October",
          color: "#b2b1b2",
          disabled: true
        },
        {
          values: sleepData[11],
          key: "November",
          color: "#8bfe58",
          disabled: true
        },
        {
          values: sleepData[12],
          key: "December",
          color: "#9fc2fc",
          disabled: true
        },
      ])
      .call(chart);


    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
  });
};

