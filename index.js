// Write your solution in this file!
const driver = {};

//This function should not mutate the driver and should return a new driver that
//has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value) {
    //creating newDriver variable
    //.assign allows us to combine properties from mulitple objects, into a single object
    //so we are assigning a key driver 
    const newDriver = Object.assign({}, driver)
    //assigning value to that key  
    newDriver[key] = value;
    return newDriver;
};

//since we are mutating the driver parameter, we dont assign a newDriver variable
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver; 
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver)
    delete newDriver[key]; 
    return newDriver; 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}