function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, obj){
  let key = Object.keys(obj)[0];
  let value = obj[key];
  return drivers.filter(driver => driver[key] === value);
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(driver => driver.name);
}
