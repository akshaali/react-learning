import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log("Request intercept", config);
    return config;
  },
  (error) => {
    // Do something with request error
    console.log("Request intercept error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Response intercept", response);
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Response intercept error", error);
    return Promise.reject(error);
  }
);

export const ApiCaller = ({ method, url, data = {} }) => {
  return new Promise((resolve, reject) => {
    let payload = { method, url };
    if (Object.keys(data).length) {
      payload.data = data;
    }
    axios(payload)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
