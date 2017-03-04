import { combineReducers } from 'redux';

import patient from './patientReducer';
import screen from './screenReducer';

export default combineReducers({
  patient,
  screen
});