var createScatter = function (sleepData) {

    sleepData.forEach(function (d) {
      d.size = d.y;
      d.shape = 'circle';
    });

    var chart;
    nv.addGraph(function() {
      chart = nv.models.scatterChart()
      .options({
        tooltipContent: function (key, y, e, graph) {
          var hour = y.split('.')[0];
          var min = y.split('.')[1];
          return e + '% when sleeping ' + hour + 'h' + min + 'm';
        },
        transitionDuration: 300,
        showDistX: true,
        showDistY: true,
        useVoronoi: true
      });

    d3.select('#chart3 svg')
        .datum([{
          values: sleepData,
          key: "Data",
          color: "#ff7f0e"
        }])
        .call(chart);

    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { ('New State:', JSON.stringify(e)); });
    return chart;
  });

};