const driver = {}

function updateDriverWithKeyAndValue(obj, key, val) {
    const newDriver = Object.assign({}, obj, {[key]: val})
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
    const updatedDriver = Object.assign(obj, {[key]: val})
    return updatedDriver
}

function deleteFromDriverByKey(obj, key) {
    const newDriver = Object.assign({}, obj)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}