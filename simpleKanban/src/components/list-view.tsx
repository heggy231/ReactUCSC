import * as React from 'react';
import * as ListViewReducer from '../reducers/list-view-reducer';

interface ListViewProps {
    listView: ListViewReducer.ListViewState,

    getListView: any
}

export default class ListView extends React.Component<ListViewProps, {}> {
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