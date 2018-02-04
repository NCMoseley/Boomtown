const UPDATE_AUTH_STATE = "UPDATE_AUTH_STATE";
const TOGGLE_USER_LOADING = "TOGGLE_USER_LOADING";
const UPDATE_AUTH_ID = "UPDATE_AUTH_ID";

export const updateAuthState = authenticated => ({
  type: UPDATE_AUTH_STATE,
  payload: authenticated
});

export const updateAuthId = authId => ({
  type: UPDATE_AUTH_ID,
  payload: authId
});

export const userLoading = isLoading => ({
  type: TOGGLE_USER_LOADING,
  payload: isLoading
});

export default function(
  state = {
    authenticated: "LOADING_USER",
    userLoading: true,
    authId: ""
  },
  action
) {
  switch (action.type) {
    case UPDATE_AUTH_ID:
      return { ...state, authId: action.payload };
    case UPDATE_AUTH_STATE:
      return { ...state, authenticated: action.payload };
    case TOGGLE_USER_LOADING:
      return { ...state, userLoading: action.payload };
    default:
      return state;
  }
}
