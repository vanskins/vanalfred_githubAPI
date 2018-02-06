import { combineReducers } from 'redux';
import githubUser from './githubUser/Reducers';

const reducers = combineReducers({
  githubUser,
});

export default reducers;