import { useState, useEffect } from "react";
import { BlogPost } from "../../Components";
import { APicaller } from "../../Utility/ApiCaller";

const Bollywood = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("working??")
    APicaller({
      url: "https://api.thecatapi.com/v1/images/search?limit=10",
      method: "get",
    })
      .then((response) => {
        console.log("response", response);
        setData(response)
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => console.log("finally finished"));
  }, []);

  console.log("data", data);

  return (
    <div>
      <BlogPost
        category={"travel"}
        subTitle={"XYZ"}
        title={"Bollywood ===>>>>>"}
        imgUrl={"https://cdn2.thecatapi.com/images/ik.jpg"}
      />
    </div>
  );
};

export default Bollywood;
