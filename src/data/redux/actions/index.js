import constants from './constants';

export default {
  togglePanel: () => ({
    type: constants.TOGGLE_PANEL,
  }),

  setRestaurant: restaurant => ({
    restaurant,
    type: constants.SET_RESTAURANT,
  }),

  setRestaurants: restaurants => ({
    restaurants,
    type: constants.SET_RESTAURANTS,
  }),
};
