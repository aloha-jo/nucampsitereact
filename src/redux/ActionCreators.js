import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

// In ES6 when the identified of a property is the same as its value you can actually pass it with shorthand property names: 
// payload: {
//    campsiteId,
//    rating,
//    author,
//    text
// } 