// Write your solution in this file!


const driver = {
  name: "Kizito",
  vehicle: "Honda",
  type: "2door"
};

const newdriver = {
   name: "Godswill",
  vehicle: "Nissan",
  type: "4door"
}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(obj, key) {
    const clone = Object.assign({}, obj);
   delete clone[key]
  return clone  
}


function destructivelyDeleteFromDriverByKey(driver, key) {
   delete driver[key]
  return driver 
}



