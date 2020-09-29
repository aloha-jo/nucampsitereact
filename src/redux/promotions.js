import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// capitalizing promotions is optional, arrow function is a style choice - can use function declaration instead
