// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function(obj) {
    return obj.revenue > rev
  });
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(function(driver) {
    return driver.name
  })
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    let i = Object.keys(attribute)[0]
    return driver[i] === attribute[i]
  })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver) {
    return driver.name
  })
}
