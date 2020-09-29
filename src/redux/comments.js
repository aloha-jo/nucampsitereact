import { COMMENTS } from '../shared/comments';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// capitalizing comments is optional, arrow function is a style choice - can use function declaration instead
