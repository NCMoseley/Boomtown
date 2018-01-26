// Actions

const GET_ITEMS_LOADING = "GET_ITEMS_LOADING";
const GET_ITEMS = "GET_ITEMS";
const GET_ITEMS_ERROR = "GET_ITEMS_ERROR";
const GET_ITEMS_FILTERED = "GET_ITEMS_FILTERED";

//Action Creators

// const getItemsLoading = () => ({ type: GET_ITEMS_LOADING });
// const getItems = items => ({ type: GET_ITEMS, payload: items });
// const getItemsError = error => ({ type: GET_ITEMS_ERROR, payload: error });

//Reducer

export default (
  state = {
    isLoading: false,
    items: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_ITEMS_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_ITEMS: {
      return { ...state, isLoading: false, items: action.payload, error: "" };
    }
    case GET_ITEMS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case GET_ITEMS_FILTERED: {
      return { ...state, isLoading: false, items: action.payload, error: "" };
    }
    default:
      return state;
  }
};
