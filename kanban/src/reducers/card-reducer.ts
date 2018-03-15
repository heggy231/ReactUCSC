import * as uuid from 'node-uuid';

const cards = [
    {
        id: 'card1',
        title: 'Read react book',
        description: 'I should read the book before class',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 'card2',
        title: 'Write some code',
        description: 'Practice coding skill',
        status: 'todo',
        tasks: [
            {
                id: 'card2task1',
                name: 'hello world example',
                done: true
            },
            {
                id: 'card2task2',
                name: 'Kanban example',
                done: false
            },
            {
                id: 'card2task3',
                name: 'Assignments',
                done: false
            }
        ]
    }
];

import * as Immutable from 'immutable';

import {ICard, Card} from '../data/card';
import {ITask, Task} from '../data/task';

function createInitialState(
    cardState: Array<ICard>
): Immutable.List<Card> {
    
    const cards: Array<Card> = cardState.map(
        (card: ICard) => {
            const tasks: Array<Task> = card.tasks.map(
                (task: ITask) => new Task(task)
            );
            
            return new Card(
                (Object as any).assign({}, card, {
                    tasks: Immutable.List(tasks)
                })
            );
        }
    );
    return Immutable.List<Card>(cards);
}

export function reduce(
    state: Immutable.List<Card> = createInitialState(cards),
    action: any
): Immutable.List<Card> {
    let cardId: string;
    let taskId: string;

    switch (action.type) {
        case 'ADD_TASK':
            cardId = action.payload.cardId;
            const taskName: string = action.payload.taskName;
            
            const task: Task = new Task({
                id: uuid.v4(),
                name: taskName,
                done: false
            });
            
            const addCardIndex: number = 
                state.findIndex(
                    (card: Card) => card.get('id') === cardId
                );
            
            return state.setIn(
                [addCardIndex, 'tasks'],
                state.getIn([addCardIndex, 'tasks']).push(task)
            );
            
        case 'REMOVE_TASK':
            cardId = action.payload.cardId;
            taskId = action.payload.taskId;
            
            let {
                cardIndex: removeCardIndex,
                taskIndex: removeTaskIndex
            } = getCardAndTaskIndexes(cardId, taskId, state);
            
            return state.deleteIn(
                [removeCardIndex, 'tasks', removeTaskIndex]
            );
        case 'TOGGLE_TASK':
            cardId = action.payload.cardId;
            taskId = action.payload.taskId;
            
            let {
                cardIndex: toggleCardIndex,
                taskIndex: toggleTaskIndex
            } = getCardAndTaskIndexes(cardId, taskId, state);
            
            const currentDone: boolean = state.getIn(
                [toggleCardIndex, 'tasks', toggleTaskIndex, 'done']
            );
            return state.setIn(
                [toggleCardIndex, 'tasks', toggleTaskIndex, 'done'],
                !currentDone
            );
        default:
            return state;
    }
}

function getCardAndTaskIndexes(
    cardId: string,
    taskId: string,
    state: Immutable.List<Card>
): {
    cardIndex: number,
    taskIndex: number
} {
    const cardIndex: number =
        state.findIndex(
            (card: Card) => card.get('id') === cardId
        );
    const currentCard: Card = state.get(cardIndex);
    const taskIndex: number =
        currentCard.get('tasks').findIndex(
            (task: Task) => task.get('id') === taskId
        );
    
    return {
        cardIndex: cardIndex,
        taskIndex: taskIndex
    };
}