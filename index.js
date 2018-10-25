// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue (driver, key, value) {
  const driverCopy = {...driver}
  driverCopy[key] = value
  return driverCopy
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const driverCopy = {...driver}
  delete driverCopy[key]
  return driverCopy
}