import {connect} from 'react-redux';

import {increase, decrease} from '../actions/age-actions';

import App from './app';

interface AppState {
  ageEntry: number
}

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => {
  return {
    appIncreaseAge: () => dispatch(increase()),
    appDecreaseAge: () => dispatch(decrease())
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;