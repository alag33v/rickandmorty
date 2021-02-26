import { episodesAPI } from '../../api/api';

// Actions
const ADD_EPISODES = 'episodes/ADD_EPISODES';
const ADD_MORE_EPISODES = 'episodes/ADD_MORE_EPISODES';
const SEARCH_EPISODES = 'episodes/SEARCH_EPISODES';
const CHECK_URL = 'episodes/CHECK_URL';

// Reducer
const initialState = {
  episodes: [],
  url: ''
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EPISODES:
      return { ...state, episodes: action.payload };
    case ADD_MORE_EPISODES:
      return { ...state, episodes: [...state.episodes, ...action.payload] };
    case SEARCH_EPISODES:
      return { ...state, episodes: action.payload };
    case CHECK_URL:
      return { ...state, url: action.payload };
    default:
      return state;
  }
};

// Action Creators
const addEpisodes = arr => ({
  type: ADD_EPISODES,
  payload: arr
});

const addMoreEpisodes = arr => ({
  type: ADD_MORE_EPISODES,
  payload: arr
});

const searchEpisodes = arr => ({
  type: SEARCH_EPISODES,
  payload: arr
});

const checkUrl = str => ({
  type: CHECK_URL,
  payload: str
});

// Thunks
export const getEpisodes = () => async dispatch => {
  const data = await episodesAPI.fetchEpisodes();
  dispatch(checkUrl(data.info.next));
  dispatch(addEpisodes(data.results));
};

export const getMoreEpisodes = url => async dispatch => {
  const data = await episodesAPI.fetchMoreEpisodes(url);
  dispatch(checkUrl(data.info.next));
  dispatch(addMoreEpisodes(data.results));
};

export const getSearchEpisodes = searchCharacter => async dispatch => {
  const data = await episodesAPI.search(searchCharacter);
  dispatch(searchEpisodes(data));
};

export default episodesReducer;
