import { PARTNERS } from '../shared/partners';

export const Partners = (state = PARTNERS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// capitalizing partners is optional, arrow function is a style choice - can use function declaration instead
