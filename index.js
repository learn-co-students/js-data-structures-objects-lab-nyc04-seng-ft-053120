// Write your solution in this file!
let driver = {}


//this function is non destructive because it does not modify the original object "driver"
function updateDriverWithKeyAndValue(driver, key, value){

    //assigns driver object
    const newDriver = {...driver}
    //makes a new key and assign it a value
    newDriver[key] = value
    return newDriver
}

//this function is destructive because it modifies the original object "driver"
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    let newDriver = {...driver}

    delete newDriver[key]
    return newDriver

}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}