// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(dr) {return dr.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  arr = [];
  drivers.map(function(dr) {
    if (dr.revenue > revenue) {
      arr.push(dr.name);
    }
  });
  return arr;
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(dr) {
    for (const key in obj) {
      return dr[key] === obj[key];
    }
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(dr) {return dr.name;});
}
