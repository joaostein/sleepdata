d3.csv("javascripts/data.csv", function(error, row) {
  var monthData = {
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

  var rawData = [];


  for (var i = 0; i < row.length; i++) {
    if (row[i]['Sleep quality'].split('%')[0] < 10) {
      continue;
    }

    var night = {};
    night.x = parseFloat(row[i]['Time in bed'].split(':').join('.')) + Math.random();
    night.y = row[i]['Sleep quality'].split('%')[0];
    night.minutes = row[i]['Time in bed'].split(':')[1];
    night.month = (new Date(row[i]['Start'])).getMonth() + 1;
    night.size = row[i]['Sleep quality'].split('%')[0];
    night.shape = 'circle';
    monthData[night.month].push(night);
    rawData.push(night);
  }

  for (month in monthData) {
    monthData[month] = monthData[month].sort(function (a, b) {
      var x1 = Math.round(parseFloat(a.x)*100)/100;
      var x2 = Math.round(parseFloat(b.x)*100)/100;
      if (x1 < x2)
        return -1;
      if (x1 > x2)
        return 1;
      return 0;
    });
  }

  window.getData = function () {
    return [
      {
        values: monthData[1],
        key: "January",
        color: "#ff7f0e",
        disabled: false
      },
      {
        values: monthData[2],
        key: "February",
        color: "#2ca02c",
        disabled: true
      },
      {
        values: monthData[3],
        key: "March",
        color: "#2222ff",
        disabled: true
      },
      {
        values: monthData[4],
        key: "April",
        color: "#667711",
        disabled: true
      },
      {
        values: monthData[5],
        key: "May",
        color: "#ff0000",
        disabled: true
      },
      {
        values: monthData[6],
        key: "June",
        color: "#000000",
        disabled: true
      },
      {
        values: monthData[7],
        key: "July",
        color: "#e4ff00",
        disabled: true
      },
      {
        values: monthData[8],
        key: "August",
        color: "#f000ff",
        disabled: true
      },
      {
        values: monthData[9],
        key: "September",
        color: "#00fffc",
        disabled: true
      },
      {
        values: monthData[10],
        key: "October",
        color: "#b2b1b2",
        disabled: true
      },
      {
        values: monthData[11],
        key: "November",
        color: "#8bfe58",
        disabled: true
      },
      {
        values: monthData[12],
        key: "December",
        color: "#9fc2fc",
        disabled: true
      }
    ];
  };

  createLineGraph(monthData);
  createHistoricalBarChart(rawData);
  createScatter(monthData);
});
