// Actions

const SET_FILTER_VALUE = "SET_FILTER_VALUE";

//Action Creators

export const setFilterValue = filterValue => ({
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
  console.log(action);
  console.log(state);
  switch (action.type) {
    case SET_FILTER_VALUE: {
      return { ...state, filterValue: action.payload };
    }
    default:
      return state;
  }
};