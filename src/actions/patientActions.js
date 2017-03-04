export function setFirstName(name) {
  return {
    type: 'SET_FIRST_NAME',
    payload: name,
  };
}

export function setInputValue(property, value) {
  return {
    type: 'SET_INPUT_VALUE',
    payload: value,
    property: property,
  };
}