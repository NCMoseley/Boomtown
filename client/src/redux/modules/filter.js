// Actions

const SET_FILTER_VALUE = "SET_FILTER_VALUE";

//Action Creators

const setFilterValue = filterValue => ({
  type: SET_FILTER_VALUE,
  payload: filterValue
});

//Reducer

export default (
  state = {
    filterValue: " "
  },
  action
) => {
  switch (action.type) {
    case SET_FILTER_VALUE: {
      return { ...state, filterValue: action.payload };
    }
    default:
      return state;
  }
};
