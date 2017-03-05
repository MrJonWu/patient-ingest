export function setInputValue(property, value) {
  return {
    type: 'SET_INPUT_VALUE',
    property: property,
    payload: value,
  };
}

export function resetValue() {
  return {
    type: 'RESET_VALUE',
  };
}