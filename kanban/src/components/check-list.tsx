import * as React from 'react';
import * as Immutable from 'immutable';

import {Task} from '../data/task';

interface CheckListProps {
    tasks: Immutable.List<Task>;
    
    handleAddTask: any;
    handleToggleTask: any;
    handleRemoveTask: any;
}

export default class CheckList extends React.Component<CheckListProps, {}> {
    checkInputKeyPress(evt: any): void {
        if (evt.key === 'Enter') {
            const taskName: string = evt.target.value;
            this.props.handleAddTask(taskName);
            evt.target.value = '';
        }
    }
    
    render(): JSX.Element {
        const that = this;
        return (
            <div>
                <ul>
                {
                    this.props.tasks.map(
                        (task: Task) => {
                            return (
                                <li
                                    key = {task.get('id')}
                                    className = 'checklist_task'
                                >
                                    <input
                                        type = "checkbox"
                                        checked = {task.get('done')}
                                        onChange = {
                                            (evt) => that.props.handleToggleTask(task.get('id'))
                                        }
                                    />
                                    <span>{task.get('name')}</span>
                                    {" "}
                                    <span
                                        className = "fas fa-times"
                                        onClick = {
                                            (evt) => that.props.handleRemoveTask(task.get('id'))
                                        }
                                    />
                                </li>
                            )
                        }
                    )
                }
                </ul>
                <input
                    type = "text"
                    className = "checklist_add_task"
                    placeholder = "Type then hit Enter to add a task"
                    onKeyPress = {
                        this.checkInputKeyPress.bind(this)
                    }
                />
            </div>
        );
    }
}