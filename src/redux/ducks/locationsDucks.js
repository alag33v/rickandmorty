import { locationsAPI } from '../../api/api';

// Actions
const ADD_LOCATIONS = 'locations/ADD_LOCATIONS';
const ADD_MORE_LOCATIONS = 'locations/ADD_MORE_LOCATIONS';
const SEARCH_LOCATIONS = 'locations/SEARCH_LOCATIONS';
const CHECK_URL = 'locations/CHECK_URL';

// Reducer
const initialState = {
  locations: [],
  url: ''
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATIONS:
      return { ...state, locations: action.payload };
    case ADD_MORE_LOCATIONS:
      return { ...state, locations: [...state.locations, ...action.payload] };
    case SEARCH_LOCATIONS:
      return { ...state, locations: action.payload };
    case CHECK_URL:
      return { ...state, url: action.payload };
    default:
      return state;
  }
};

// Action Creators
const addLocations = arr => ({
  type: ADD_LOCATIONS,
  payload: arr
});

const addMoreLocations = arr => ({
  type: ADD_MORE_LOCATIONS,
  payload: arr
});

const searchLocations = arr => ({
  type: SEARCH_LOCATIONS,
  payload: arr
});

const checkUrl = str => ({
  type: CHECK_URL,
  payload: str
});

// Thunks
export const getLocations = () => async dispatch => {
  const data = await locationsAPI.fetchCharacters();
  dispatch(checkUrl(data.info.next));
  dispatch(addLocations(data.results));
};

export const getMoreLocations = url => async dispatch => {
  const data = await locationsAPI.fetchMoreLocations(url);
  dispatch(checkUrl(data.info.next));
  dispatch(addMoreLocations(data.results));
};

export const getSearchLocations = searchLocation => async dispatch => {
  const data = await locationsAPI.search(searchLocation);
  dispatch(searchLocations(data));
};

export default charactersReducer;
