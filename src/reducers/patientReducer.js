export default function reducer(state={
    firstName: '',
    lastName: '',
    sex: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    street: '',
    apt: '',
    city: '',
    state: '',
    zipcode: '',
    maritalStatus: '',
    race: '',
    history: [],
    smoke: '',
    alcohol: '',
    drugs: '',
    allergies: '',
    medications: '',
    surgeries: '',
    otherComments: '',
    agree: false,
  }, action) {

    switch (action.type) {
      case "SET_INPUT_VALUE": {
        return {...state, [action.property]: action.payload}
      }
    }
    console.log(state);
    return state
}