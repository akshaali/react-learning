import { ApiCaller } from "../../Utility/ApiCaller";
export const FETCH_CAT_LIST = "FETCH_CAT_LIST";
export const FETCH_CAT_LIST_RESOLVED = "FETCH_CAT_LIST_RESOLVED";
export const FETCH_CAT_LIST_REJECTED = "FETCH_CAT_LIST_REJECTED";

export const fetchCatListAction = (payload) => {
  // middleware thunk
  console.log("fetchCatListAction called", payload);
  return (dispatch) => {
    console.log("fetchCatListAction dispatcher")
    ApiCaller(payload)
      .then((response) => {
        console.log("response of Apicaller at fetch action", response);
        dispatch(fetchCatListResolvedAction(response.data));
      })
      .catch((error) => {
        console.log("error of Apicaller at fetch action", error);
        dispatch(fetchCatListRejectedAction(error));
      });
  };
};

export const fetchCatListResolvedAction = (payload) => {
  console.log("fetchCatListResolvedAction called");
  return {
    type: FETCH_CAT_LIST_RESOLVED,
    payload,
  };
};

export const fetchCatListRejectedAction = (payload) => {
  console.log("fetchCatListRejectedAction called");
  return {
    type: FETCH_CAT_LIST_REJECTED,
    payload,
  };
};
