d3.csv("javascripts/data.csv", function(error, row) {
  var data = [];
  for (var i = 0; i < row.length; i++) {
    if (row[i]['Sleep quality'].split('%')[0] < 10) {
      continue;
    }

    var night = {};
    night.x = parseFloat(row[i]['Time in bed'].split(':').join('.')) + Math.random();
    night.y = row[i]['Sleep quality'].split('%')[0];
    night.minutes = row[i]['Time in bed'].split(':')[1];
    data.push(night);
  }


  data.forEach(function (d) {
    console.log( d.x );
    console.log( Math.floor(Math.round(parseFloat(d.x)*100)/100) );
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
