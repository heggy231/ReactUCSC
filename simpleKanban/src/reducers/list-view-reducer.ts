import * as Immutable from 'immutable';

const ListViewStateRecord = Immutable.Record({
    loading: false, // booleaing
    data: undefined, // Immutable.List<Card>
    error: undefined // string
});

export class ListViewState extends ListViewStateRecord {};

export function reduce (
    state: ListViewState = new ListViewState(),
    action: any
): ListViewState {
    switch(action.type) {
        case 'REQUEST_LIST_VIEW':
            return state.set('loading', true);
        case 'RECEIVE_LIST_VIEW_SUCCESS':
            return state.set('loading', false);
        case 'RECEIVE_LIST_VIEW_FAILURE':
            return state.set('loading', false);
        default:
            return state;
    }
}