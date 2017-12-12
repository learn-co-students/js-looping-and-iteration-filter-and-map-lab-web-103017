function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(driver, revenue) {
  let output = [];
  const arr = driversWithRevenueOver(driver, revenue);
  arr.map(function(el) {return output.push(el.name) });
  return output;
}

function exactMatch(driver, obj) {
  let key = Object.keys(obj)[0]
  return driver.filter(function(el) {
    return el[key] === obj[key];
  })
}

function exactMatchToList(driver, obj) {
  const set = exactMatch(driver, obj)
  return set.map(function(el) { return el.name});
}