import * as React from 'react';
interface AppProps {
  //application state
  ageEntry: number; 

  //how to change the application state
  appIncreaseAge: any;
  appDecreaseAge: any;
}

export default class App extends React.Component<AppProps, {}> {
  render(): JSX.Element {
    return (
      <div>
        <div>I'm {this.props.ageEntry}-year old.</div>
        <button
          type = "button"
          onClick = {
            (evt) => this.props.appIncreaseAge()
          }
        >
          Increase my age
        </button>

        <button
          type = "button"
          onClick = {
            (evt) => this.props.appDecreaseAge()
          }
        >
          Decrease my age
        </button>
      </div>
    );
  }
}