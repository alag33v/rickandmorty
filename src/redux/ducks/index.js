import { combineReducers } from 'redux';
import charactersReducer from './charactersDucks';
import locationsReducer from './locationsDucks';
import episodesReducer from './episodesDucks';

const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationsReducer,
  episodes: episodesReducer
});

export default rootReducer;
