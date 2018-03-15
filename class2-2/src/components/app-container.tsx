import {connect} from 'react-redux';

import {change} from '../actions/name-actions';
import {update} from '../actions/list-actions';

import App from './app';

interface AppState {
    nameEntry: string,
    nameList: Array<string>
}

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => {
    return {
        appChangeName: (name: string) => dispatch(change(name)),
        appUpdateList: (name: string) => dispatch(update(name))
    }
};

const AppContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);

export default AppContainer;