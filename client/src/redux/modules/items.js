// Actions

const GET_ITEMS_LOADING = "GET_ITEMS_LOADING";
const GET_ITEMS = "GET_ITEMS";
const GET_ITEMS_ERROR = "GET_ITEMS_ERROR";

const ITEMS_URL = "http://localhost:3001/items";
const ITEMS_USERS = "http://localhost:3001/users";

//Action Creators

const getItemsLoading = () => ({ type: GET_ITEMS_LOADING });
const getItems = items => ({ type: GET_ITEMS, payload: items });
const getItemsError = error => ({ type: GET_ITEMS_ERROR, payload: error });

//Async Action Creator

export const fetchItemsAndUser = () => dispatch => {
  dispatch(getItemsLoading());

  const items = fetch(ITEMS_URL)
    .catch(console.log)
    .then(r => r.json())
    .catch(console.log);
  const users = fetch(ITEMS_USERS).then(r => r.json());

  return Promise.all([items, users])
    .then(response => {
      // console.log(response);

      const [itemsList, userList] = response;

      //loop over the items
      // Map: look at all the items in the list and give me what I call
      const combined = itemsList.map(item => {
        //for every item add a 'user' property and set it to 'user!'
        item.itemowner = userList.find(user => user.id === item.itemowner);
        return item;
      });
      // Filter items based on tag
      // const filtered = combined.filter(item => item.tags[0]);

      // this.setState({ items: filtered });

      console.log(combined);
      //the information required lives in the response array*
      // merge the 2 list together, into a single list. use mapfunction*
      // add items from user array into items array*
      //find mandi in the first loop and go through the scond loop and ask
      //what mandi owns*
      // attach the new list to this component state*
      // pass that list into the items component*
      // the items compoinent should render the new lsit
      // userlist.map;
      dispatch(getItems(combined));
    })
    .catch(error => dispatch(getItemsError(error)));
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
    case GET_ITEMS_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_ITEMS: {
      return { ...state, isLoading: false, items: action.payload, error: "" };
    }
    case GET_ITEMS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
