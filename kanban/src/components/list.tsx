import * as React from 'react';
import * as Immutable from 'immutable';

import {Card} from '../data/card';
import Kard from './card';

interface ListProps {
    title: string;
    cards: Immutable.List<Card>;
    
    addTask: any;
    toggleTask: any;
    removeTask: any;
}

export default class List extends React.Component<ListProps, {}> {
    render(): JSX.Element {
        return(
            <div className='list'>
                <h1>{this.props.title}</h1>
                <div>
                    {
                        this.props.cards.map(
                            (card: Card) => {
                                return (
                                    <Kard
                                        key = {card.get('id')}
                                        id = {card.get('id')}
                                        title = {card.get('title')}
                                        description = {card.get('description')}
                                        tasks = {card.get('tasks')}
                                        
                                        toggleTask = {this.props.toggleTask}
                                        removeTask = {this.props.removeTask}
                                        addTask = {this.props.addTask}
                                    />
                                )
                            }
                        ).toArray()
                    }
                </div>
            </div>
        )
    }
}