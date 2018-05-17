import constants from './constants';

export default {
  togglePanel: panelView => ({
    panelView,
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
