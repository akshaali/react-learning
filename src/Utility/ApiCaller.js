import axios from "axios";
import axois from "axios";

axios.interceptors.request.use((config) => {
    // console.log("intercepting request", config);
    return config
}, (error) => {
    // console.log("intercepting error request", error);
});

axios.interceptors.response.use((config) => {
    // console.log("intercepting response", config);
    return config
}, (error) => {
    // console.log("intercepting error response", error);
});

export const ApiCaller = ({ method = "get", url = "", data = {} }) => {
  return new Promise((resolve, reject) => {
    const payload = { method, url };
    if(Object.keys(data).length){
        payload.data = data
    }
    axois(payload)
      .then((response) => {
        console.log("response at the Apicaller: ", response)
        resolve(response);
      })
      .catch((error) => {
        console.log("error at the ApiCaller: ", error)
        reject(error);
      });
  });
};
