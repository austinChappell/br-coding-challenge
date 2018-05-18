import constants from './constants';

export default {
  togglePanel: panelView => ({
    panelView,
    type: constants.TOGGLE_PANEL,
  }),

  setCurrentLocation: currentLocation => ({
    currentLocation,
    type: constants.SET_CURRENT_LOCATION,
  }),

  setRestaurants: restaurants => ({
    restaurants,
    type: constants.SET_RESTAURANTS,
  }),
};
