// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(driv){
    return driv.revenue > revenue
  })
}

function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver,revenue).map(function(dr){return dr.name})
}

function exactMatch (driver, obj) {
  return driver.filter(function (driv) {
    let found = false;
    for (const key in obj) {
      found = driv[key] === obj[key];
    }

    return found;
  });
}

function exactMatchToList(driver,obj){
  return exactMatch(driver,obj).map(function(driv){return driv.name})
}
