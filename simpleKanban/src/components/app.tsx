import * as React from 'react';
import * as Immutable from 'immutable';

import * as ListViewReducer from '../reducers/list-view-reducer';
import {Card} from '../data/card';

import KanbanBoard from './kanban-board';
import ModalDialog from './modal-dialog';

interface AppProps {
    listView: ListViewReducer.ListViewState;
    
    getListView: any
    
}

export default class App extends React.Component<AppProps, {}> {
    displayListView(): JSX.Element {
        return (
            < ListView
                listView: this.prop
            />
        );
    }
    render(): JSX.Element {
        return (
            <div>
               {
                   this.displayListView()
               }
            </div>
        )
    }
}