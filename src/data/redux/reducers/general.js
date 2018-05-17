import constants from '../actions/constants';

const initialState = {
  panelOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_PANEL:
      return { ...state, panelOpen: !state.panelOpen };
    default:
      return state;
  }
};

export default reducer;
