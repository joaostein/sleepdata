d3.csv("javascripts/data.csv", function(error, row) {
  var data = [];
  row.forEach(function(d) {
    var night = {};

    night.x = d['Time in bed'].split(':').join('.');
    night.y = d['Sleep quality'].split('%')[0];

    data.push(night);
  });

  var data = data.sort(function compare(a, b) {
    var x1 = Math.round(parseFloat(a.x)*100)/100;
    var x2 = Math.round(parseFloat(b.x)*100)/100;
    if (x1 < x2)
      return -1;
    if (x1 > x2)
      return 1;
    return 0;
  });

  createLineGraph(data);
  createHistoricalBarChart(data);
  createScatter(data);
});
