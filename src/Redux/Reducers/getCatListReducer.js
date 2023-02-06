import {
  //   FETCH_CAT_LIST,
  FETCH_CAT_LIST_REJECTED,
  FETCH_CAT_LIST_RESOLVED,
} from "../Actions/getCatListAction";

const intialState = {
  loader: false,
  catList: [],
  error: false,
  errorMessage: "",
  succesMessage: "",
};

const getCatListReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_CAT_LIST_RESOLVED: {
      console.log("FETCH_CAT_LIST_RESOLVED reducer", action);
      return {
        ...state,
        catList: action.payload,
        succesMessage: "Cat list fetch succefully",
      };
    }
    case FETCH_CAT_LIST_REJECTED: {
      console.log("FETCH_CAT_LIST_REJECTED reducer", action);
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
};

export default getCatListReducer;
