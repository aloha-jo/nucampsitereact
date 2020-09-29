import { CAMPSITES } from '../shared/campsites';

export const Campsites = (state = CAMPSITES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
// capitalizing campsites is optional, arrow function is a style choice - can use function declaration instead

