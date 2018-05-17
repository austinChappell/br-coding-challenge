import constants from '../actions/constants';

const initialState = {
  appTitle: 'Lunch Tyme',
  currentLocation: null,
  panelOpen: false,
  panelView: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_PANEL:
      return { ...state, panelOpen: !state.panelOpen, panelView: action.panelView };
    case constants.SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.currentLocation };
    default:
      return state;
  }
};

export default reducer;
