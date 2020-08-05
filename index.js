// To start, define a driver variable and assign it to an Object
let driver = {
  name: 'Anh',
  address: '123 Sesame St'
};

function updateDriverWithKeyAndValue(driver, key, value) {
  // This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
  let newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  // this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  // It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
  let copyDriver = {...driver};
  delete copyDriver[key];
  return copyDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  // this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.
  
  // delete driver.key; // this does not work
  
  delete driver[key];
  return driver;
}