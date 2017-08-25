var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign(object, {key: 'value'});
  return object;
}
