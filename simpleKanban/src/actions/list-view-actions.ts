import axios from 'axios';

const API_URL = 'https://react-spring-2017-server-winwust.c9users.io:8080/api';

export function getListView(): any {
    return (dispatch: any) => {
        dispatch(requestListView());

        axios.get(`${API_URL}/cards`)
        .then((response) => dispatch(receiveListViewSuccess(response)))
        .catch((error) => dispatch(receiveListViewFailure(error)));
    };
}

function requestListView() any {
    return {
        type: 'REQUEST_LIST_VIEW'
    };
}

function receiveListViewSuccess(
    response: any
): any {
    return {
        type: 'RECEIVE_LIST_VIEW_SUCCESS',
        payload: response
    };
}

function receiveListViewFailure(
    error: any
): any {
    return {
        type: 'RECEIVE_LIST_VIEW_FAILURE',
        payload: error
    };
}