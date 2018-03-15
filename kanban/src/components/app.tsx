import * as React from 'react';
import * as Immutable from 'immutable';

import {Draft} from '../reducers/draft-reducer';
import {Card} from '../data/card';

import KanbanBoard from './kanban-board';
import ModalDialog from './modal-dialog';

interface AppProps {
    cards: Immutable.List<Card>;
    draft: Draft;
    
    addTask: any;
    toggleTask: any;
    removeTask: any;
    openDraft: any;
    closeDraft: any;
}

export default class App extends React.Component<AppProps, {}> {
    render(): JSX.Element {
        return (
            <div>
                <h1>Kanban Board</h1>
                <KanbanBoard
                    cards = {this.props.cards}
                    
                    addTask = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    
                    openDraft = {this.props.openDraft}
                />
                {
                    this.props.draft.get('show')
                    ?
                    <ModalDialog
                        closeDraft = {this.props.closeDraft}
                    />
                    :
                    null
                }
            </div>
        )
    }
}