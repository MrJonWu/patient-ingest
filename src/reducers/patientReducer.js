const initial = {
  firstName: null,
  lastName: null,
  sex: null,
  dateOfBirth: null,
  email: null,
  phone: null,
  street: null,
  apt: null,
  city: null,
  state: null,
  zipcode: null,
  maritalStatus: null,
  race: null,
  familyHistory: {
    grandparents: [],
    father: [],
    mother: [],
    siblings: [],
    children: [],
    },
  history: [],
  smoke: {smoke: null, frequency: null},
  alcohol: {alcohol: null, frequency: null},
  drugs: {drugs: null, frequency: null},
  allergies: null,
  medications: null,
  surgeries: null,
  otherComments: null,
  agree: false,
}

export default function reducer(state=initial, action) {

    switch (action.type) {
      case "SET_INPUT_VALUE": {
        return {...state, [action.property]: action.payload}
      }
      case "RESET_VALUE": {
        state = initial;
        return {
          ...state, 
          familyHistory: {
            grandparents: [],
            father: [],
            mother: [],
            siblings: [],
            children: [],
          }, 
          history: [],
          smoke: {smoke: null, frequency: null},
          alcohol: {alcohol: null, frequency: null},
          drugs: {drugs: null, frequency: null},
        }
        break;
      }
    }
    return state
}