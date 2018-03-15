import {combineReducers} from 'redux';

import * as AgeReducer from './age-reducer';

const indexReducer = combineReducers({
  ageEntry : AgeReducer.reduce
});

export default indexReducer;