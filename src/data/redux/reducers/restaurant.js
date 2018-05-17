import constants from '../actions/constants';

const initialState = {
  restaurants: [],
  selectedRestaurant: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_RESTAURANTS:
      return { ...state, restaurants: action.restaurants };
    case constants.SET_RESTAURANT:
      return { ...state, selectedRestaurant: action.restaurant };
    default:
      return state;
  }
};

export default reducer;
