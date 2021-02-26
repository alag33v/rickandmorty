import { charactersAPI } from '../../api/api';

// Actions
const ADD_CHARACTERS = 'characters/ADD_CHARACTERS';
const ADD_MORE_CHARACTERS = 'characters/ADD_MORE_CHARACTERS';
const SEARCH_CHARACTERS = 'characters/SEARCH_CHARACTERS';
const CHECK_URL = 'characters/CHECK_URL';

// Reducer
const initialState = {
  characters: [],
  url: ''
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return { ...state, characters: action.payload };
    case ADD_MORE_CHARACTERS:
      return { ...state, characters: [...state.characters, ...action.payload] };
    case SEARCH_CHARACTERS:
      return { ...state, characters: action.payload };
    case CHECK_URL:
      return { ...state, url: action.payload };
    default:
      return state;
  }
};

// Action Creators
const addCharacters = arr => ({
  type: ADD_CHARACTERS,
  payload: arr
});

const addMoreCharacters = arr => ({
  type: ADD_MORE_CHARACTERS,
  payload: arr
});

const searchCharacters = arr => ({
  type: SEARCH_CHARACTERS,
  payload: arr
});

const checkUrl = str => ({
  type: CHECK_URL,
  payload: str
});

// Thunks
export const getCharacters = () => async dispatch => {
  const data = await charactersAPI.fetchCharacters();
  dispatch(checkUrl(data.info.next));
  dispatch(addCharacters(data.results));
};

export const getMoreCharacters = url => async dispatch => {
  const data = await charactersAPI.fetchMoreCharacters(url);
  dispatch(checkUrl(data.info.next));
  dispatch(addMoreCharacters(data.results));
};

export const getSearchCharacters = searchName => async dispatch => {
  const data = await charactersAPI.search(searchName);
  dispatch(searchCharacters(data));
};

export default charactersReducer;
