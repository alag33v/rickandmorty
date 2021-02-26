import { combineReducers } from 'redux';
import charactersReducer from './charactersDucks';
import locationsReducer from './locationsDucks';

const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationsReducer
});

export default rootReducer;
