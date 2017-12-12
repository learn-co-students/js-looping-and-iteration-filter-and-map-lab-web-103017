// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  let arr = []
  for (let x of driver) {
    if (x.revenue > revenue) {
      arr.push(x);
    };
  };
  return arr
};

function driverNamesWithRevenueOver(driver, revenue) {
  let arr = []
  for (let x of driver) {
    if (x.revenue > revenue) {
      arr.push(x.name);
    };
  };
  return arr
};

function exactMatch(driver, obj) {
  let arr = [];
  for (let x of driver) {
    if (x.name == obj["name"]) {
      arr.push(x)
    } else if (x.revenue == obj["revenue"]) {
      arr.push(x)
    };
  };
  return arr
};

function exactMatchToList(driver, obj) {
  let arr = [];
  for (let x of driver) {
    if (x.name == obj["name"]) {
      arr.push(x.name)
    } else if (x.revenue == obj["revenue"]) {
      arr.push(x.name)
    };
  };
  return arr
};
