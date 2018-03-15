import * as React from 'react';
import * as Immutable from 'immutable';

import {Card} from '../data/card';
import List from './list';

interface KanbanBoardProps {
    cards: Immutable.List<Card>;
    
    addTask: any;
    toggleTask: any;
    removeTask: any;
    
    openDraft: any;
}

export default class KanbanBoard 
    extends React.Component<KanbanBoardProps, {}> {

    render(): JSX.Element {
        return (
            <div>
                <div
                    className = "float-button"
                    onClick = {
                        (evt) => this.props.openDraft()
                    }
                >+</div>
                <List
                    title = "To Do"
                    cards = {
                        Immutable.List(
                            this.props.cards.filter(
                                (card: Card) => card.get('status') === 'todo'
                            )
                        )
                    }
                    
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    addTask = {this.props.addTask}
                />
                <List
                    title = "In Progress"
                    cards = {
                        Immutable.List(
                            this.props.cards.filter(
                                (card: Card) => card.get('status') === 'in-progress'
                            )
                        )
                    }
                    
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    addTask = {this.props.addTask}
                />
                <List
                    title = "Done"
                    cards = {
                        Immutable.List(
                            this.props.cards.filter(
                                (card: Card) => card.get('status') === 'done'
                            )
                        )
                    }
                    
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    addTask = {this.props.addTask}
                />
            </div>
        )
    }
}