var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign({}, object, { [key]: value});
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = object;
  delete newObject.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  reurn object;
}
