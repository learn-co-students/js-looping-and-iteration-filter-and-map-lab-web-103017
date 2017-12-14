// Code your solution here:
function driversWithRevenueOver(drivers, dollars) {
  return drivers.filter(function(driver){ return driver.revenue > dollars})
  // return filtered
  // console.log(drivers, dollars)

}

function driverNamesWithRevenueOver(drivers, dollars) {
  filtered = drivers.filter(function(driver){return driver.revenue > dollars})
  return filtered.map(function(driver){return driver.name})

}

function exactMatch(drivers, search) {
    let s_key = Object.keys(search)[0]
    let s_val = Object.values(search)[0]
    return drivers.filter(function(driver){return driver[s_key] === s_val})
}

function exactMatchToList(drivers, search) {
  let s_key = Object.keys(search)[0]
  let s_val = Object.values(search)[0]
  filtered = drivers.filter(function(driver){return driver[s_key] === s_val})

  return filtered.map(function(driver){return driver.name})


}
