import constants from '../actions/constants';

const initialState = {
  appTitle: 'Lunch Tyme',
  panelOpen: false,
  panelView: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_PANEL:
      return { ...state, panelOpen: !state.panelOpen, panelView: action.panelView };
    default:
      return state;
  }
};

export default reducer;
