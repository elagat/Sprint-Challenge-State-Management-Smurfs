export const initialState = {
  smurfs: [
    {
      name: 'Smurf Names',
      age: null,
      id: null,
      height: ''
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SMURF':
      return {
        ...state,
        todos: [...state.smurfs, action.payload]
      };
    default:
      return state
  }
};
