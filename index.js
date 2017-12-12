// Code your solution here:


function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
      return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    for (const key in object){
      return  driver[key] === object[key]
    }
  })
}


function exactMatchToList (drivers, object) {
  return exactMatch(drivers, object).map(function (driver) {
      return driver.name;
    });
}

// exactMatch() - This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.
