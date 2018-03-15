import * as Immutable from 'immutable';
import {connect} from 'react-redux';

import * as TaskActions from '../actions/task-actions';
import * as DraftActions from '../actions/draft-actions';
import {Draft} from '../reducers/draft-reducer';

import {Card} from '../data/card';
import App from './app';

interface AppState {
    cards: Immutable.List<Card>;
    draft: Draft;
}

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => {
    return {
        addTask: (cardId: string, taskName: string) => {
            dispatch(TaskActions.addTask(cardId, taskName));
        },
        toggleTask: (cardId: string, taskId: string) => {
            dispatch(TaskActions.toggleTask(cardId, taskId));
        },
        removeTask: (cardId: string, taskId: string) => {
            dispatch(TaskActions.removeTask(cardId, taskId));
        },
        
        openDraft: () => {
            dispatch(DraftActions.openDraft());
        },
        closeDraft: () => {
            dispatch(DraftActions.closeDraft());
        }
    }
};

const AppContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);

export default AppContainer;