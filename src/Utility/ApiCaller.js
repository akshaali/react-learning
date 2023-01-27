

export const APicaller = ({ url = "", method = "get", body = {} }) => {
  return new Promise((resolve, reject) => {
    const options = { method };
    if(Object.keys(body).length){
        options.body = body;
    }
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};

/*
status code -
200 - Success
400 - Internal Server
404: Api not found
429 : Bad Request
401: Unauthorized
500: Internal Server Error
*/