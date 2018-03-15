import * as Immutable from 'immutable';

export interface ITask {
    _id: string;
    name: string;
    done: boolean;
}

const TaskRecord = Immutable.Record({
    id: '',
    name: '',
    done: false
});

export class Task extends TaskRecord {}