import {combineReducers} from 'redux';

import * as CardReducer from './card-reducer';
import * as DraftReducer from './draft-reducer';

const indexReducer = combineReducers({
    cards: CardReducer.reduce,
    draft: DraftReducer.reduce
});

export default indexReducer;