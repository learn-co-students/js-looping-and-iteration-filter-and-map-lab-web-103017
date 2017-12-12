// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(driver => driver.revenue >= revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue >= revenue).map(driver => driver.name)
}

function exactMatch(drivers, obj) {
  //return Object.values(obj)[0]
  key = Object.keys(obj)[0]
  value = Object.values(obj)[0]
  return drivers.filter(driver => driver[key] === value)
}

function exactMatchToList(drivers, obj) {
  key = Object.keys(obj)[0]
  value = Object.values(obj)[0]
  return drivers.filter(driver => driver[key] === value).map(driver => driver.name)
}
