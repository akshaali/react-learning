// Actions
import { ApiCaller } from "../../Utility/ApiCaller";

export const FETCH_DATA = "FETCH_DATA";
export const ERROR_OCCURED = "ERROR_OCCURED";
export const SUCCESS = "SUCCESS";

export const fetchDataAction = (payload) => {
  console.log("IncrementCounterAction called");
  //   return (dispatch) => {
  //     console.log("IncrementCounterAction ===>>");
  //     ApiCaller({
  //       method: "GET",
  //       url: "https://api.thecatapi.com/v/images/search?limit=-10",
  //     })
  //       .then((response) => {
  //         console.log("response", response);
  //         dispatch(successAction(response));
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //         dispatch(errorOccuredAction());
  //       });
  //   };
  return {
    type: "FETCH_DATA",
    payload,
  };
};

export const errorOccuredAction = () => ({ type: ERROR_OCCURED });

export const successAction = (payload) => {
  return {
    type: SUCCESS,
    payload,
  };
};
