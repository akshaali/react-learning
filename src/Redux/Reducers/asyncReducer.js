import { ERROR_OCCURED, SUCCESS } from "../Actions/asyncCall";

const initialState = {
  data: [],
};

const AsyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      console.log("SUCCESS reducer called", action);
      return { ...state, data: action.payload };
    case ERROR_OCCURED:
      console.log("ERROR_OCCURED redux called", action);
      return { ...state, data: [] };
    default:
      return { ...state };
  }
};

export default AsyncReducer;
