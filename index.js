// Code your solution here:
function driversWithRevenueOver(arr, num){
  return arr.filter(function(hash){
    return hash.revenue > num
  })
}

function driverNamesWithRevenueOver(arr, num){
  let v = driversWithRevenueOver(arr, num)
  return v.map(function(hash){ return hash.name})
}

function exactMatch(arr, obj){
  return arr.filter(function(hash){
    let key = Object.keys(obj)
    return obj[key] === hash[key]
  })
}

function exactMatchToList(arr, obj){
  return exactMatch(arr, obj).map(function(hash){
    return hash.name
  })
}
