// Actions
const ADD_CHARACTERS = 'characters/ADD_CHARACTERS';

// Reducer
const initialState = {
  characters: []
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};

// Action Creators
export const addCharacters = arr => ({
  type: ADD_CHARACTERS,
  payload: arr
});

export default charactersReducer;
