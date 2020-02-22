// Write your solution in this file!
const driver = {};

// returns a driver with the orignal key value pais and the new
// returns a clone with the new data - doesn't modify the original driver
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

// updates `driver` with the given `key` and `value` (it is destructive) 
// and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

// non-destructive
function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}

// destructive
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}