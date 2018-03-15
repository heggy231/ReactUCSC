import {combineReducers} from 'redux';

import * as ListViewReducer from './list-view-reducer';

const indexReducer = combineReducers({
    listView: ListViewReducer.reduce
});

export default indexReducer;