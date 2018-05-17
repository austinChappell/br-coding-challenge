const initialState = {
  restaurants: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return 'something';
    default:
      return state;
  }
};

export default reducer;
