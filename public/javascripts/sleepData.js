d3.csv("javascripts/data.csv", function(error, row) {
  var data = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: []
  };

  for (var i = 0; i < row.length; i++) {
    if (row[i]['Sleep quality'].split('%')[0] < 10) {
      continue;
    }

    var night = {};
    night.x = parseFloat(row[i]['Time in bed'].split(':').join('.')) + Math.random();
    night.y = row[i]['Sleep quality'].split('%')[0];
    night.minutes = row[i]['Time in bed'].split(':')[1];
    night.month = (new Date(row[i]['Start'])).getMonth() + 1;
    data[night.month].push(night);
  }

  for (month in data) {
    data[month] = data[month].sort(function (a, b) {
      var x1 = Math.round(parseFloat(a.x)*100)/100;
      var x2 = Math.round(parseFloat(b.x)*100)/100;
      if (x1 < x2)
        return -1;
      if (x1 > x2)
        return 1;
      return 0;
    });
  }

  createLineGraph(data);
  createHistoricalBarChart(data);
  createScatter(data);
});
