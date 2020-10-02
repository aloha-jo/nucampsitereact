import * as ActionTypes from './ActionTypes'; 
// wildcard syntax above

export const Comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
};

// capitalizing comments is optional, arrow function is a style choice - can use function declaration instead
// new Date().toISOString(); = todays date
// concat lets us attach a new item to the end of an array