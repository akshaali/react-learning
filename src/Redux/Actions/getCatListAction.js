export const FETCH_CAT_LIST = "FETCH_CAT_LIST";
export const FETCH_CAT_LIST_RESOLVED = "FETCH_CAT_LIST_RESOLVED";
export const FETCH_CAT_LIST_REJECTED = "FETCH_CAT_LIST_REJECTED";

export const fetchCatListAction = (payload) => {
  console.log(" fetchCatListAction called");
  return {
    type: FETCH_CAT_LIST,
    payload,
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
