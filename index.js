const driver = {};



function updateDriverWithKeyAndValue(driver, k, v) {
  const obj = { [k]: v }
  return Object.assign({}, driver, obj);
}
function destructivelyUpdateDriverWithKeyAndValue(driver,k,v) {
    driver[k] = v
    return driver 
   }
   function deleteFromDriverByKey(driver,k) {
    const copyDriver = Object.assign({},driver);
    delete copyDriver[k]
    return copyDriver
  }
  function destructivelyDeleteFromDriverByKey(driver,k) {
    delete driver[k]
    return driver
  }