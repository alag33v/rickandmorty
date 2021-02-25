// Actions
const ADD_CHARACTERS = 'characters/ADD_CHARACTERS';
const ADD_MORE_CHARACTERS = 'characters/ADD_MORE_CHARACTERS';
const SEARCH_CHARACTERS = 'characters/SEARCH_CHARACTERS';

// Reducer
const initialState = {
  characters: []
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return { ...state, characters: action.payload };
    case SEARCH_CHARACTERS:
      return { ...state, characters: action.payload };
    case ADD_MORE_CHARACTERS:
      return { ...state, characters: [...state.characters, ...action.payload] };
    default:
      return state;
  }
};

// Action Creators
export const addCharacters = arr => ({
  type: ADD_CHARACTERS,
  payload: arr
});

export const addMoreCharacters = arr => ({
  type: ADD_MORE_CHARACTERS,
  payload: arr
});

export const searchCharacters = arr => ({
  type: SEARCH_CHARACTERS,
  payload: arr
});

export default charactersReducer;
