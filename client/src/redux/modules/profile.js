// Actions

const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
const GET_PROFILE = "GET_PROFILE";
const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
const ITEMS_USERS = "http://localhost:3001/users";

//Action Creators

const getProfileLoading = () => ({ type: GET_PROFILE_LOADING });
const getProfile = items => ({ type: GET_PROFILE, payload: items });
const getProfileError = error => ({ type: GET_PROFILE_ERROR, payload: error });

//Async Action Creator

export const fetchItemsAndUser = userid => dispatch => {
  dispatch(getProfileLoading());

  return Promise.all(
    [`http://localhost:3001/items/?itemowner=${userid}`, ITEMS_USERS].map(url =>
      fetch(url).then(response => response.json())
    )
  )
    .then(response => {
      const [itemsList, usersList] = response;

      const combined = itemsList.map(item => {
        item.itemowner = usersList.find(user => user.id === item.itemowner);

        if (item.borrower) {
          item.borrower = usersList.find(user => user.id === item.borrower);
        }
        return item;
      });

      dispatch(getProfile(combined));
    })
    .catch(error => dispatch(getProfileError(error)));
};

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
    case GET_PROFILE_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_PROFILE: {
      return { ...state, isLoading: false, items: action.payload, error: "" };
    }
    case GET_PROFILE_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
