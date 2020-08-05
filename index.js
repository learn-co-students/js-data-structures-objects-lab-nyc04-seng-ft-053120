// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value) {
    // becuase the last param has to be in a "hash"/obj need to asign the not literal key with a colon 
  return Object.assign({}, driverObject,{[key]: value})  
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    // if you return line 11 you only return that key
    driverObject[key] = value
    // return the obj
    return driverObject
}

function deleteFromDriverByKey(driverObject, key) {
     let obj = Object.assign({}, driverObject)
     delete obj[key]
     return obj
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
    delete driverObject[key]
    return driverObject
}