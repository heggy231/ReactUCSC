import * as React from 'react';

import Form from './form';
import List from './list';

interface AppProps {
    nameEntry: string;
    nameList: Array<string>;
    
    appChangeName: any;
    appUpdateList: any;
}

export default class App extends React.Component<AppProps, {}> {
    render(): JSX.Element {
        return (
            <div>
                <h1>User Registration</h1>
                <Form
                    nameEntry = {this.props.nameEntry}
                    changeName = {this.props.appChangeName}
                    updateList = {this.props.appUpdateList}
                />
                <List
                    nameList = {this.props.nameList}
                />
            </div>
        )
    }
}