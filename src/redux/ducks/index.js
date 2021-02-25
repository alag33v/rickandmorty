import { combineReducers } from 'redux';
import charactersReducer from './charactersDucks';

const rootReducer = combineReducers({
  characters: charactersReducer
});

export default rootReducer;
