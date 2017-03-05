export function nextScreen() {
  return {
    type: 'NEXT_SCREEN',
    payload: 1,
  };
}

export function previousScreen() {
  return {
    type: 'PREVIOUS_SCREEN',
    payload: 1,
  };
}