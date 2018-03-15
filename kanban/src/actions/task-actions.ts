export function toggleTask(
    cardId: string,
    taskId: string
): any {
    return {
        type: 'TOGGLE_TASK',
        payload: {
            cardId: cardId,
            taskId: taskId
        }
    };
}

export function removeTask(
    cardId: string,
    taskId: string
): any {
    return {
        type: 'REMOVE_TASK',
        payload: {
            cardId: cardId,
            taskId: taskId
        }
    };
}

export function addTask(
    cardId: string,
    taskName: string
): any {
    return {
        type: 'ADD_TASK',
        payload: {
            cardId: cardId,
            taskName: taskName
        }
    }
}