import * as ActionTypes from './ActionTypes';

export const Campsites = (state = {
        isLoading: true,
        errMess: null,
        campsites: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};
// capitalizing campsites is optional, arrow function is a style choice - can use function declaration instead

