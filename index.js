// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  output = drivers.filter(function(driver){
    return driver.revenue > revenue;
  })
  return output
}

function driverNamesWithRevenueOver(drivers, revenue){
  output = drivers.filter(function(driver){
    return driver.revenue > revenue
  })
  output = output.map(function(driver){
    return driver.name
  })
  return output
}

function exactMatch(drivers, testdriver){
  output = drivers.filter(function(driver){
    return (driver.revenue === testdriver.revenue || driver.name === testdriver.name)
  })
  return output
}

function exactMatchToList(drivers, criteria){
  output = drivers.filter(function(driver){
    return (driver.revenue === criteria.revenue || driver.name === criteria.name)
  }).map(function(driver){
    return driver.name
  })
  return output
}
