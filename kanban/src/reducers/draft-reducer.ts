import * as Immutable from 'immutable';

const DraftRecord = Immutable.Record({
    cardId: undefined,
    title: undefined,
    description: undefined,
    status: undefined,
    show: false
});

export class Draft extends DraftRecord {}

export function reduce(
    state: Draft = new Draft(),
    action: any
): Draft {
    switch (action.type) {
        case 'OPEN_DRAFT':
            return state.set('show', true);
        case 'CLOSE_DRAFT':
            return state.set('show', false);
        default:
            return state;
    }
}