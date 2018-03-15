import * as Immutable from 'immutable';

import {ITask, Task} from './task';

export interface ICard {
    _id: string;
    title: string;
    description: string;
    status: string;
    tasks: Array<ITask>;
}

const CardRecord = Immutable.Record({
    id: '',
    title: '',
    description: '',
    status: '',
    tasks: undefined
});

export class Card extends CardRecord {}