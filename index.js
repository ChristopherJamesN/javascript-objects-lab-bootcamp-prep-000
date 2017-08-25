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
  delete newObject[key];
  return {newObject: newObject, object: object};
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
