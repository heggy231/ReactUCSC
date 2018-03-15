import {connect} from 'react-redux';

import * as ListViewReducer from '../reducers/list-view-reducer';
import * as ListViewActions from '../actions/list-view-actions';

import App from './app';

interface AppState {
    listView: ListViewReducer.ListViewState;
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => {
    return {
        getListView: () => dispatch(ListViewActions.getListView())
    };
}

const AppContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);

export default AppContainer;