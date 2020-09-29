import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes'; 
// wildcard syntax above

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
};

// capitalizing comments is optional, arrow function is a style choice - can use function declaration instead
// new Date().toISOString(); = todays date
// concat lets us attach a new item to the end of an array