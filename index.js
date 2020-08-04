let driver = {};

function updateDriverWithKeyAndValue(driverObj, key, value) {
  const newObj = { ...driverObj };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
  driverObj[key] = value;
  return driverObj;
}

function deleteFromDriverByKey(driverObj, key) {
  const newObj = { ...driverObj };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driverObj, key) {
  delete driverObj[key];
  return driverObj;
}