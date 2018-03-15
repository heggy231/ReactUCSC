import {combineReducers} from 'redux';

import * as EntryReducer from './entry-reducer';
import * as ListReducer from './list-reducer';

const indexReducer = combineReducers({
    nameEntry: EntryReducer.reduce,
    nameList: ListReducer.reduce
});

export default indexReducer;