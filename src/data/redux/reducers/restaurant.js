import constants from '../actions/constants';

const initialState = {
  dataFetched: false,
  restaurants: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_RESTAURANTS:
      return { ...state, restaurants: action.restaurants, dataFetched: true };
    default:
      return state;
  }
};

export default reducer;
