import * as React from 'react';
import * as Immutable from 'immutable';

import {Card} from '../data/card';
import {Task} from '../data/task';

import CheckList from './check-list';

interface KardProps {
    id: string;
    title: string;
    description: string;
    tasks: Immutable.List<Task>;
    
    addTask: any;
    toggleTask: any;
    removeTask: any;
}

export default class Kard extends React.Component<KardProps, {}> {

    handleToggleTask(taskId: string) {
        this.props.toggleTask(
            this.props.id,
            taskId
        );
    }
    
    handleRemoveTask(taskId: string) {
        this.props.removeTask(
            this.props.id,
            taskId
        );
    }
    
    handleAddTask(taskName: string) {
        this.props.addTask(
            this.props.id,
            taskName
        );
    }

    render(): JSX.Element {
        return (
            <div className='card'>
                <div className = 'card_edit'>
                    <span
                        className = "fas fa-times"
                    />
                </div>
                <div className = 'card_title'>
                    {this.props.title}
                </div>
                <div>{this.props.description}</div>
                <CheckList
                    tasks = {this.props.tasks}
                    
                    handleToggleTask = {this.handleToggleTask.bind(this)}
                    handleRemoveTask = {this.handleRemoveTask.bind(this)}
                    handleAddTask = {this.handleAddTask.bind(this)}
                />
            </div>
        );
    }
}